import argparse
import os
import cv2
import numpy as np
from PIL import Image
import torch
from torchvision import models
import torchvision.transforms as standard_transforms
from p2pnet.models import build_model
import warnings

warnings.filterwarnings('ignore')

# modified: vgg_.py
# model_path: /Users/francis/.cache/torch/hub/checkpoints/vgg16_bn-6c64b313.pth
vgg16 = models.vgg16_bn(pretrained=True)


class CrowdCounting:
    def __init__(self, input_root="./data/beach_use/", output_root='./data/beach_use_for_crowd_counting/'):
        self.input_root = input_root
        self.output_root = output_root
        parser = argparse.ArgumentParser('P2PNet evaluation script', parents=[self.get_args_parser()])
        self.args = parser.parse_args()
        os.environ["CUDA_VISIBLE_DEVICES"] = '{}'.format(self.args.gpu_id)
        print(self.args)
        self.device = torch.device('cpu')  # 'cuda'
        # create the pre-processing transform
        self.transform = standard_transforms.Compose([
            standard_transforms.ToTensor(),
            standard_transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
        ])
        self.model = self.__eval_model()
        pass

    def get_args_parser(self):
        parser = argparse.ArgumentParser('Set parameters for P2PNet evaluation', add_help=False)
        # * Backbone
        parser.add_argument('--backbone', default='vgg16_bn', type=str,
                            help="name of the convolutional backbone to use")
        parser.add_argument('--row', default=2, type=int, help="row number of anchor points")
        parser.add_argument('--line', default=2, type=int, help="line number of anchor points")
        parser.add_argument('--output_dir', default='', help='path where to save')
        parser.add_argument('--weight_path', default='', help='path where the trained weights saved')
        parser.add_argument('--gpu_id', default=0, type=int, help='the gpu used for evaluation')
        return parser

    def __eval_model(self):
        # get the P2PNet
        model = build_model(self.args)
        # move to GPU
        model.to(self.device)
        # load trained model
        if self.args.weight_path is not None:
            checkpoint = torch.load('./p2pnet/weights/SHTechA.pth', map_location='cpu')  # args.weight_path
            model.load_state_dict(checkpoint['model'])
        # convert to eval mode
        model.eval()
        return model

    def read_samples(self, filename):
        # set your image path here
        img_path = self.input_root + filename
        # load the images
        img_raw = Image.open(img_path).convert('RGB')
        # round the size
        width, height = img_raw.size
        new_width = width // 128 * 128
        new_height = height // 128 * 128
        img_raw = img_raw.resize((new_width, new_height), Image.ANTIALIAS)
        # pre-proccessing
        img = self.transform(img_raw)
        samples = torch.Tensor(img).unsqueeze(0)
        samples = samples.to(self.device)
        return img_raw, samples

    def crowd_counting(self, samples):
        # run inference
        outputs = self.model(samples)
        outputs_scores = torch.nn.functional.softmax(outputs['pred_logits'], -1)[:, :, 1][0]

        outputs_points = outputs['pred_points'][0]

        threshold = 0.5
        # filter the predictions
        points = outputs_points[outputs_scores > threshold].detach().cpu().numpy().tolist()
        predict_cnt = int((outputs_scores > threshold).sum())
        outputs_scores = torch.nn.functional.softmax(outputs['pred_logits'], -1)[:, :, 1][0]
        outputs_points = outputs['pred_points'][0]
        threshold = 0.5
        # filter the predictions
        points = outputs_points[outputs_scores > threshold].detach().cpu().numpy().tolist()
        predict_cnt = int((outputs_scores > threshold).sum())
        outputs_scores = torch.nn.functional.softmax(outputs['pred_logits'], -1)[:, :, 1][0]
        outputs_points = outputs['pred_points'][0]
        return points, predict_cnt

    def img_save(self, img_raw, predicting_points, predict_cnt, filename):
        # draw the predictions
        size = 2
        img_to_draw = cv2.cvtColor(np.array(img_raw), cv2.COLOR_RGB2BGR)
        for p in predicting_points:
            img_to_draw = cv2.circle(img_to_draw, (int(p[0]), int(p[1])), size, (0, 0, 255), -1)
        # save the visualized image
        filename, file_extension = os.path.splitext(filename)
        new_file_name = "%s_pred_%d.%s" % (filename, predict_cnt, file_extension)
        cv2.imwrite(os.path.join(self.output_root, new_file_name), img_to_draw)  # args.output_dir
        pass

    def findAllFile(self):
        for root, ds, fs in os.walk(self.input_root):
            for f in fs:
                yield f


foo = CrowdCounting(input_root="./data/test_data/", output_root='./data/beach_use_for_crowd_counting/')
for filename in foo.findAllFile():
    if filename == '.DS_Store':
        continue
    print('processing : ' + filename)
    img_raw, samples = foo.read_samples(filename)
    points, predict_cnt = foo.crowd_counting(samples)
    print('Detected %2d persons with %s' % (predict_cnt, 'P2PNet'))
    foo.img_save(img_raw, points, predict_cnt, filename)
    print("")

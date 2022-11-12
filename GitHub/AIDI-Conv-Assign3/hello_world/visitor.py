import json
import random

lst = []
with open("./doc/living_the_longest.json") as f:
    lst = json.load(f)


class Visitor:
    def __init__(self, usr):
        self.species_lst0 = lst.copy()

        self.usr = usr
        self.past_species = self.get_past_species()
        self.cur_species = self.get_cur_species()
        self.visits = self.get_visits()
        self.species = self.cur_species["species"]
        self.life_span = self.cur_species["life_span"]
        self.comment = self.cur_species["comment"]
        pass

    def update_status_after_game_play(self):
        self.set_past_species()
        self.set_visits()

    @classmethod
    def get_usr_dict(cls, visitors, name):
        if name not in visitors:
            usr = {}
            usr["cur_species"] = {"id": -1, "species": "", "life_span": "", "comment": ""}
            usr["visits"] = 0
            usr["past_species"] = []
        else:
            usr = visitors[name]
        return usr

    def is_correct(self, life_span):
        return int(self.life_span) == int(life_span)

    def get_cur_species(self):
        if 'cur_species' not in self.usr:
            self.usr["cur_species"] = None
        return self.usr["cur_species"]

    def update_cur_species(self):
        buf = []
        for item in self.species_lst0:
            cur = item["species"]
            if cur not in self.past_species:
                buf.append(item)
        random.shuffle(buf)
        item = buf[0]
        self.usr["cur_species"] = item
        return item

    def get_past_species(self):
        if 'past_species' not in self.usr:
            self.usr["past_species"] = []
        return self.usr["past_species"]

    def set_past_species(self):
        name = self.cur_species["species"]
        self.usr["past_species"].append(name)
        pass

    def get_visits(self):
        if 'visits' not in self.usr:
            self.usr["visits"] = 0
        return self.usr["visits"]

    def set_visits(self):
        self.usr["visits"] += 1
        return self.usr["visits"]


















import os
import pandas as pd
import geopandas as gpd  # the GEOS-based vector package
from geopandas.geodataframe import GeoDataFrame
import numpy as np  # the array computation library
import matplotlib as mp
import matplotlib.pyplot as plt  # the visualization package
import gmplot
import rasterio as rio  # the GEOS-based raster package
from rasterio.plot import show
from rasterio.plot import show_hist
from shapely.geometry import Polygon
from geopandas import GeoSeries
from shapely.geometry import Point
from shapely.affinity import translate
from rasterio import plot as rioplot
# import elevation
import seaborn as sns  # for scientific graphs
from rasterio.transform import from_bounds, from_origin
from rasterio.warp import reproject, Resampling
from scipy.stats import linregress
from scipy.io import arff
from numpy import asarray
from numpy import save
from numpy import load
from io import StringIO
import earthpy as et
import earthpy.spatial as es
import earthpy.plot as ep
import gmaps

# # gmaps.figure(layout=figure_layout)
# landuse = gpd.read_file('TO_landuse.shp')
# landuse.plot(cmap='jet', column='CATEGORY', figsize=(10, 10))
# landuse.to_file('landuse-1.shp')
#
# # IncidentsShortVaughan = gpd.read_file('IncidentsShort-Vaughan.shp')
# # IncidentsShortVaughan.plot(figsize=(10, 10))
#
# GTA_Pop_Sex = gpd.read_file('GTA_Pop_Sex.shp')
# GTA_Pop_Sex.plot(cmap='jet', column='POP2006', figsize=(10, 10))
#
# GTA_Income_Pipeline = gpd.read_file('GTA_Income_Pipeline.shp')
# GTA_Income_Pipeline.plot(cmap='jet', figsize=(10, 10))
#
# GTA_PipeLine = gpd.read_file('GTA_PipeLine.shp')
# GTA_PipeLine.plot(cmap='jet', figsize=(10, 10))
#
# # Display GTA and Toronto
# GTA_Pop_Sex = gpd.read_file('GTA_Pop_Sex.shp')
# GTA_Pop_Sex.plot(cmap='jet', column='POP2006')
# Toronto_border = gpd.read_file('Toronto_border.shp')
# Toronto_border.plot(cmap='jet')
# fig, ax = plt.subplots(1)
# ax.set_title('Simple plot')
# GTA_Pop_Sex.plot(ax=ax, cmap='rainbow', column='POP2006')
# Toronto_border.plot(ax=ax, facecolor='red')
#
# # intersecting
# GTA_Pop_Sex = gpd.read_file('GTA_Pop_Sex.shp')
# GTA_Pop_Sex.plot(cmap='jet', column='POP2006')
# Toronto_border = gpd.read_file('Toronto_border.shp')
# Toronto_border.plot(cmap='jet')
# GTA_Pop_Sex_in_Toronto = gpd.overlay(GTA_Pop_Sex, Toronto_border, how='intersection')
# GTA_Pop_Sex_in_Toronto.plot(figsize=(5, 5), cmap='jet', column='POP2006')
# # Save the geodataframe to a .shp (Shapfile)
# GTA_Pop_Sex_in_Toronto.to_file('Intersected_GTA_Pop_Sex.shp')
#
# # Assigning a new column to the attribute table and convert it in Km^2 - Area
# GTA_Pop_Sex_in_Toronto['Area3(Km2)'] = GTA_Pop_Sex_in_Toronto.area / 1000000
#
# Canada = gpd.read_file('C:\Ali\geopandas\CAN_adm1.shp')
# Canada.plot(cmap='jet', column='Name', figsize=(10, 10))
#
# Canada0 = gpd.read_file('C:\Ali\geopandas\CAN_adm0.shp')
# Canada0.plot(cmap='jet', column='Name', figsize=(10, 10))
#
# Canada2 = gpd.read_file('C:\Ali\geopandas\CAN_adm2.shp')
# Canada2.plot(cmap='jet', column='Name', figsize=(10, 10))
#
# # make a query
# Canada3 = gpd.read_file('CAN_adm3.shp')
# Canada3.plot(cmap='jet', column='Name', figsize=(10, 10))
# RichmondHill = Canada3.query("Name =='Richmond Hill'")
# RichmondHill.plot(cmap='jet', column='Name', figsize=(10, 10))
#
# # Save the geodataframe to a .shp (Shapfile)
# RichmondHill.to_file('New_RichmondHill.shp')
#
# Toronto = Canada3.query("Name =='Toronto'")
# Toronto.plot(cmap='jet', column='Name', figsize=(10, 10))
#
# # Display Richmond hill and Toronto
# fig, ax = plt.subplots(1)
# RichmondHill.plot(ax=ax, color='green', column='Name', figsize=(10, 10))
# Toronto.plot(ax=ax, color='red', column='Name', figsize=(10, 10))
#
# # Display World map
# world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))
# world['total'] = 1
# world.plot(column='total', cmap='Set1')
# Canadaworld = world.query("name=='Canada'")
# Canadaworld.plot(cmap='jet', column='name', figsize=(10, 10))
# cities = gpd.read_file(gpd.datasets.get_path('naturalearth_cities'))
# cities.plot(color='red', figsize=(10, 10))
#
# # union
# Canada3 = gpd.read_file('CAN_adm3.shp')
# Canada3.plot(cmap='jet', column='Name', figsize=(10, 10))
# RichmondHill = Canada3.query("Name =='Richmond Hill'")
# RichmondHill.plot(cmap='jet', column='Name', figsize=(10, 10))
#
# # Save the geodataframe to a .shp (Shapfile)
# RichmondHill.to_file('New_RichmondHill.shp')
# Toronto = Canada3.query("Name =='Toronto'")
# Toronto.plot(cmap='jet', column='Name', figsize=(10, 10))
# Toronto_Richmondhill = gpd.overlay(RichmondHill, Toronto, how='union')
# Toronto_Richmondhill.plot(figsize=(10, 10), cmap='jet')
#
# # Display buffer
# test = gpd.read_file("New_RichmondHill.shp")
# test.head()
# buffered = test.copy()
# buf = buffered.buffer(0.4)
# buf.plot(figsize=(10, 10), cmap='jet')
# buffered['geometry'] = GeoSeries.buffer(200, resolution=16)
# buffered.head()
#
# test.buffer(1)
# test.plot()
#
# # # query from IncidentsShortVaughan point map and save in new shapefile
# # IncidentsShortVaughan = gpd.read_file('IncidentsShort-Vaughan.shp')
# # IncidentsShortVaughan.plot(figsize=(5, 5))
# # selectedIncidents = IncidentsShortVaughan.query("alm_date =='28-Jul-09'")
# # selectedIncidents.plot(cmap='jet', column='alm_date', figsize=(5, 5))
# # selectedIncidents.to_file('Selected Incidents Vaughan.shp')
#
# # buffer and dissolve polygons
# SelectedIncidentsVaughan = gpd.read_file('Selected Incidents Vaughan.shp')
# SelectedIncidentsVaughan.plot(color='red', column='alm_date', figsize=(5, 5))
# bufSelectedIV = SelectedIncidentsVaughan.buffer(1000)
# bufSelectedIV.to_file('Buffer 1000.shp')
# buffer1000 = gpd.read_file("Buffer 1000.shp")
# buffer1000['buff1'] = 1
# buffer1000_1 = buffer1000.dissolve('buff1')
# buffer1000_1.plot(color='red', figsize=(5, 5))
#
# buffer1000_1 = unary_union(buffer1000)
#
# bufSelectedIV2 = SelectedIncidentsVaughan.buffer(2000)
# bufSelectedIV2.to_file('C:\Ali\geopandas\Buffer 2000.shp')
# buffer2000 = gpd.read_file("Buffer 2000.shp")
# buffer2000['buff2'] = 1
# buffer2000_2 = buffer2000.dissolve('buff2')
# buffer2000_2.plot(color='blue', figsize=(5, 5))
#
# fig, ax = plt.subplots(1)
# buffer2000_2.plot(ax=ax, color='blue')
# buffer1000_1.plot(ax=ax, color='red')
#
# read and plot raster data
l7_composite = r"l7_composite.img"
raster = rio.open(l7_composite)
band1 = raster.read(1)
show(band1)

print("linear unit: %s" % raster.crs.linear_units)
bbox = raster.bounds
w = (bbox.right - bbox.left) / 1000
h = (bbox.top - bbox.bottom) / 1000
print("bounding box: %.2f * %.2f = %.2f " % (w, h, w * h))

# Show band by band
show((raster, 4), cmap='Reds')
show((raster, 3), cmap='Greens')
show((raster, 1), cmap='Blues')
show((raster, 1))
#
# # calculate bands stats
# array = raster.read()
# stats = []
# for band in array:
#     stats.append({
#         'min': band.min(),
#         'mean': band.mean(),
#         'median': np.median(band),
#         'max': band.max()})
# print(stats)
#
# # Create histogram
# show_hist(raster, bins=50, lw=0.0, stacked=False, alpha=0.3,
#           histtype='stepfilled', title="Histogram")
#
# # read raster data
# l7_composite = r"l7_composite.img"
# raster = rio.open(l7_composite)
# # Read the grid values into numpy arrays
# nir = raster.read(4)
# red = raster.read(3)
# green = raster.read(2)
# # Create the false composite by stacking
# nrg = np.dstack((nir, red, green))
# # Let's see how our false color composite looks like
# plt.imshow(nrg)
#
# # Normalize the values using the function that we defined earlier
# nirn = nir / 255
# redn = red / 255
# greenn = green / 255
#
# # Convert to floats
# red = red.astype('f4')
# nir = nir.astype('f4')
# np.seterr(divide='ignore', invalid='ignore')
#
# # Calculate NDVI using numpy arrays
# ndvi = (nir - red) / (nir + red)
# # Plot the NDVI
# plt.imshow(ndvi, cmap='terrain_r')
# # Add colorbar to show the index
# plt.colorbar()
#
# # Create the true composite by stacking
# red1 = raster.read(3)
# green1 = raster.read(2)
# blue1 = raster.read(1)
# # Create the true composite by stacking
# rgb = np.dstack((red1, green1, blue1))
# # Let's see how our true color composite looks like
# plt.imshow(rgb)

# Read DEM file`
dem1bsq1 = r"dem1bsq1.tif"
dem1 = rio.open(dem1bsq1)
show(dem1)
dem2 = dem1.read(1)

type(dem1)
dem = dem1.read(1)
type(dem)
dem.tofile("saved-dem-binary")
array_dem_binary = np.fromfile("saved-dem-binary")
np.save("saved-dem-binary.npy", dem)
array_dem_npy = np.load("saved-dem-binary.npy")
np.savetxt('demtxt.txt', dem, delimiter=" ", fmt="%i")

# calculate bands stats
array = dem1.read()
stats = []
for band in array:
    stats.append({
        'min': band.min(),
        'mean': band.mean(),
        'median': np.median(band),
        'max': band.max()})
print(stats)

loadedData = np.loadtxt('demtxt.txt')
arrloadedData = np.array(loadedData)
# data = np.read('dem')
rioplot.show(dem, cmap='hot')

x1 = 2.0
y1 = 3.0

x2 = 6.0
y2 = 5.0

a = (y2 - y1) / (x2 - x1)
b = y1 - a * x1

print('slope: ', a)
print('intercept: ', b)

slope, intercept, r_value, p_value, std_err = linregress([x1, x2], [y1, y2])
print(slope, intercept)

x = np.linspace(0, 8, 100)
y = a * x + b

plt.scatter([x1, x2], [y1, y2], color='gray')

plt.plot(x, y, linestyle='--')

plt.title("How to calculate the slope and intercept of a line using python ?", fontsize=10)
plt.xlabel('x', fontsize=8)
plt.ylabel('y', fontsize=8)

plt.xlim(0, 8)
plt.ylim(0, 8)

plt.grid()

plt.savefig("calculate_line_slope_and_intercept.png")
plt.show()

np.where(dem == -1)

# Set the home directory and get the data for the exercise
os.chdir(os.path.join(et.io.HOME, "earth-analytics"))
dtm = "dem1bsq1.tif"

# Open the DEM with Rasterio
with rio.open(dtm) as src:
    elevation = src.read(1)
    # Set masked values to np.nan
    elevation[elevation < 0] = np.nan

# Plot the data
ep.plot_bands(
    elevation,
    scale=False,
    cmap="gist_earth",
    title="DTM Without Hillshade",
    figsize=(10, 6),
)
plt.show()

# Create and plot the hillshade with earthpy
hillshade = es.hillshade(elevation)

ep.plot_bands(
    hillshade,
    scale=False,
    cbar=False,
    title="Hillshade made from DTM",
    figsize=(10, 6),
)
plt.show()

# Change the azimuth of the hillshade layer
hillshade_azimuth_210 = es.hillshade(elevation, azimuth=210)

# Plot the hillshade layer with the modified azimuth
ep.plot_bands(
    hillshade_azimuth_210,
    scale=False,
    cbar=False,
    title="Hillshade with Azimuth set to 210 Degrees",
    figsize=(10, 6),
)
plt.show()

# Adjust the azimuth value
hillshade_angle_10 = es.hillshade(elevation, azimuth=210, altitude=10)

# Plot the hillshade layer with the modified angle altitude
ep.plot_bands(
    hillshade_angle_10,
    scale=False,
    cbar=False,
    title="Hillshade with Angle Altitude set to 10 Degrees",
    figsize=(10, 6),
)
plt.show()

# Plot the DEM and hillshade at the same time
sphinx_gallery_thumbnail_number = 5
fig, ax = plt.subplots(figsize=(10, 6))
ep.plot_bands(
    elevation,
    ax=ax,
    scale=False,
    cmap="terrain",
    title="Digital Elevation Model (DEM)\n overlayed on top of a hillshade",
)
ax.imshow(hillshade, cmap="Greys", alpha=0.5)
plt.show()

gmaps.configure(api_key='AIzaSyC8NczAOcKppk6uzANqKiVrJmIMqsQ6eYA')

figure_layout = {

    'width': '600px',
    'height': '400px',
    'border': '1px solid black',
    'padding': '1px'
}

gmaps.figure(layout=figure_layout)

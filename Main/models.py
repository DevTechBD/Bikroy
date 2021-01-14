from django.db import models

# Create your models here.


class Category(models.Model):
    slug = models.SlugField()
    title = models.CharField(max_length=155)
    category_icon = models.ImageField(upload_to="images/")
    category_description = models.TextField(null=True)
    
    
    def __str__(self):
        return self.title

class Brand(models.Model):
    slug=models.SlugField()
    title = models.CharField(max_length=155)
    brand_icon = models.ImageField(upload_to="images/")

    def __str__(self):
        return self.title

class Cities(models.Model):
    slug = models.SlugField()
    city_name = models.CharField(max_length=155)
    
    
    def __str__(self):
        return self.city_name
    
class Divisions(models.Model):
    slug = models.SlugField()
    div_name = models.CharField(max_length=155)
    
    def __str__(self):
        return self.div_name
    
class Product(models.Model):
    
    TYPES = (
        ("BIRD", "bird"),
        ("LIVESTOCK", "livestock"),
        ("PETS", "pets"),
        ("Water Purifier", "water purifier"),
        ("SOFAS", "sofas"),
        ("BEDS", "beds"),
        ("TABLES", "tables")
    )
    
    CONDITIONS = (
        ("USED", "USED"),
        ("NEW", "new"),
    )
    
    slug = models.SlugField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, null=True, blank=True)
    image = models.ImageField(upload_to="images/")
    price = models.FloatField(null=True, blank=True)
    description = models.TextField()
    size = models.IntegerField(null=True, blank=True)
    address = models.TextField(null=True)
    # if Land Type PRoduct
    land_size = models.IntegerField(null=True, blank=True)
    house_size = models.IntegerField(null=True, blank=True)
    baths = models.IntegerField(null=True, blank=True)
    beds = models.IntegerField(null=True, blank=True)
    # Animal
    _type = models.CharField(null=True, blank=True, choices=TYPES, max_length=155)
    # Device & Electronics
    condition = models.CharField(null=True, blank=True, choices=CONDITIONS, max_length=155)
    
    
    
    
    


        
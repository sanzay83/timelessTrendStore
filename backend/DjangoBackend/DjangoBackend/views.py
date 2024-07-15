from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from DjangoBackend.models import Items
from DjangoBackend.serializers import ItemsSerializer
from django.http.response import JsonResponse

@api_view(['GET'])
def itemsApi(request, id=0):
  if request.method=='GET':
    item = Items.objects.all()
    item_serializer = ItemsSerializer(item, many=True)
    return JsonResponse(item_serializer.data, safe=False)

@api_view(['GET'])
def items(request):
  return Response([{
    'id': '1',
    'image': "path_to_image_1",
    'name': "Item 100",
    'price': '50',
    'description': "A beautiful item perfect for any occasion.",
  },
  {
    'id': '2',
    'image': "path_to_image_2",
    'name': "Item 2",
    'price': '75',
    'description': "A stylish item that complements your wardrobe.",
  },
  {
    'id': '3',
    'image': "path_to_image_3",
    'name': "Item 3",
    'price': '100',
    'description': "An elegant item for a sophisticated look.",
  }])
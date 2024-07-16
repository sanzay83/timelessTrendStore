from DjangoBackend.models import Items
# , User

from DjangoBackend.serializers import ItemsSerializer, UserSerializer
from django.contrib.auth.models import User
from django.http.response import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate



@api_view(['GET','POST','PUT','DELETE'])
def itemsApi(request, id=0):
  if request.method=='GET':
    item = Items.objects.all()
    item_serializer = ItemsSerializer(item, many=True)
    return JsonResponse(item_serializer.data, safe=False)
  elif request.method=='POST':
    item_data = JSONParser().parse(request)
    item_serializer = ItemsSerializer(data=item_data)
    if item_serializer.is_valid():
      item_serializer.save()
      return Response({"message": "Added successfully"}, status=status.HTTP_201_CREATED)
    return Response({"error": "Failed to add"}, status=status.HTTP_400_BAD_REQUEST)
  elif request.method=='PUT':
    item_data = JSONParser().parse(request)
    item=Items.objects.get(item_id=item_data['id'])
    item_serializer=ItemsSerializer(item,data=item_data)
    if item_serializer.is_valid():
      item_serializer.save()
      return JsonResponse("Updated Successfully", safe=False)
    return JsonResponse("Failed to Update", safe=False)
  elif request.method=='DELETE':
    item =Items.objects.get(item_id=id)
    item.delete()
    return JsonResponse("Deleted Successfully", safe=False)


@api_view(['POST'])
def reg_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if username and password:
        user = User.objects.create(
            username=username,
            password=make_password(password),
            is_staff=True,
            is_superuser=True
        )
        return Response({"message": "Admin user created successfully"}, status=status.HTTP_201_CREATED)
    return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


# @api_view(['GET','POST'])
# def user(request, id=0):
#   if request.method=='GET':
#     user_data = JSONParser().parse(request)
#     user=User.objects.get(username=user_data["username"])
#     passw=User.objects.get(username=user_data["username"])
#     print(user)
#     user_serializer = UserSerializer(user, data=user_data)
#     if user_serializer.is_valid():
#         return JsonResponse(user_serializer.data, safe=False)
#   elif request.method=='POST':
#     user_data = JSONParser().parse(request)
#     user_serializer = UserSerializer(data=user_data)
#     if user_serializer.is_valid():
#       user_serializer.save()
#       return Response({"message": "User added successfully"}, status=status.HTTP_201_CREATED)
#     return Response({"error": "Failed to add user"}, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# @permission_classes([AllowAny])
# def login_user(request):
#     username = request.data.get('username')
#     password = request.data.get('password')
#     user = authenticate(request, username=username, password=password)
#     if user is not None:
#         refresh = RefreshToken.for_user(user)
#         return Response({
#             'refresh': str(refresh),
#             'access': str(refresh.access_token),
#         })
#     else:
#         return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
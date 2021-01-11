from rest_framework import routers
from django.urls import path, include
from . import views
from .views import home

router = routers.DefaultRouter()
router.register(r'category', views.CategoryViewSet)
router.register(r'product', views.ProductViewSet)
router.register(r'user', views.UserViewSet)
router.register(r'order', views.OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.signin, name='signin'),
    path('logout/<int:id>/', views.signout, name='signout'),
    path('', home, name='api.home'),
    # path('category/', views.CategoryViewSet),
    # path('product/', views.ProductViewSet),
    # path('user/', views.UserViewSet),
    # path('order/', views.OrderViewSet),
    path('add/<str:id>/<str:token>/', views.add, name='order.add'),

]

from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Post, Event, Comment
from users.models import Profile


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name = "User Profile"


class UserAdmin(BaseUserAdmin):
    inlines = (ProfileInline,)


admin.site.register(Comment)
admin.site.unregister(User)
admin.site.register(Event)
admin.site.register(Post)
admin.site.register(User, UserAdmin)

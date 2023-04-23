<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type EditProfileDto from "../../models/auth/edit-profile.model";
import ApiAuth from "../../services/api-auth.service";
import type AuthUserDto from "../../models/auth/auth-user.model";
import { apiContext } from "../../behavior-subject/auth-context.rxjs";
import EditProfileForm from "@/components/forms/EditProfileForm.vue";
import type DepartmentDto from '../../models/departments/department.model';
import { useAuthUser} from '../../composable/useAuthUser';

const router = useRouter();

const authUser = ref<AuthUserDto>(null!);
const departments = ref<DepartmentDto[]>([])

const {currentUser} = useAuthUser()

const oldProfile = ref<EditProfileDto>({
     ...currentUser.value,
     password: "",
     newPassword: ""
})

const editProfileSubmit = (editProfileDto: EditProfileDto) => {
  console.log("editProfile, editProfileDto : ", editProfileDto);

  ApiAuth.editProfile(editProfileDto)
  .then((resp) => {
    authUser.value = resp.data;

    apiContext.updateAuthUser$(authUser.value);

    router.push("/");
  })
  .catch(err => console.log("error : ", err.message)
  )
};

const backToList = () => {
      router.push("/")
}
</script>

<template>
  <EditProfileForm
  :oldProfile="oldProfile"
  :departments="departments"
  @onBackToList="backToList"
  @onEditProfileSubmit="editProfileSubmit"
  />
</template>



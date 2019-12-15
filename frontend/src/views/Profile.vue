<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container my-custom">
        <base-input
          class="custom-input"
          alternative
          type="text"
          placeholder="Nhập tên bài hát..."
        />
        <base-button type="info">Tìm kiếm</base-button>
      </div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="avatar_url" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button type="info" size="sm" class="mr-4"
                    >Chỉnh sửa</base-button
                  >
                  <base-button type="danger" size="sm" class="float-right"
                    >Đăng xuất</base-button
                  >
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">22</span>
                    <span class="description">Bài hát</span>
                  </div>
                  <div>
                    <span class="heading">10</span>
                    <span class="description">Lân tìm kiếm</span>
                  </div>
                  <div>
                    <span class="heading">89</span>
                    <span class="description">Lần tải</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>
                {{ user.fullname }}
              </h3>
              <div class="h6 font-weight-300">
                {{ user.email }}
              </div>
              <div class="h6 mt-4">
                <i class="ni business_briefcase-24 mr-2"></i>Dưới đây là bảng
                danh sách các bài hát mà bạn đã lưu lại
              </div>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-6" v-if="saved_songs.length == 0">
                  Hiện tại bạn chưa lưu bất cứ bài hát nào
                </div>
                <div class="col-12" v-if="saved_songs.length != 0">
                  <Table border :columns="col_header" :data="saved_songs">
                    <template slot-scope="{ row }" slot="name">
                      <strong>{{ row.name }}</strong>
                    </template>
                    <template slot-scope="{ row, index }" slot="song_id">
                      {{ index + 1 }}
                    </template>
                    <template slot-scope="{ row }" slot="song_avatar">
                      <img
                        class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        :data-src="row.avatar"
                        :src="row.avatar"
                        lazy="loaded"
                        style="width: 80px; height: 80px; margin: 15px;"
                      />
                    </template>
                    <template slot-scope="{ row, index }" slot="action">
                      <Button
                        type="primary"
                        style="width: 120px; margin-bottom: 10px;"
                        @click="show(index)"
                        >Nghe thử</Button
                      >
                      <br />
                      <Button
                        type="error"
                        @click="remove(index)"
                        style="width: 120px"
                        >Tải về</Button
                      >
                    </template>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>
<script>
import { getAvatar } from "../api/User.js";
export default {
  data() {
    return {
      avatar_url: "img/theme/team-4-800x800.jpg",
      user: this.$session.get("USER_INFO"),
      col_header: [
        {
          title: "ID",
          slot: "song_id",
          align: "center",
          width: 80
        },
        {
          title: "Biểu trưng",
          slot: "song_avatar",
          align: "center",
          width: 150
        },
        {
          title: "Bài hát",
          slot: "name",
          align: "center"
        },
        {
          title: "Ca sỹ",
          key: "singer",
          align: "center"
        },
        {
          title: "Tùy chọn",
          slot: "action",
          width: 180,
          align: "center"
        }
      ],
      saved_songs: [
        {
          name: "Lạc trôi",
          avatar: "https://data.whicdn.com/images/274601090/original.jpg",
          singer: "Sơn tùng MT-P",
          mp3: ""
        }
      ]
    };
  },
  methods: {},
  mounted() {
    getAvatar(this.user.email)
      .then(r => {
        if (r.data != "" && r.data != -1) {
          this.avatar_url = r.data;
        }
      })
      .catch(e => {
        this.avatar_url = "img/theme/team-4-800x800.jpg";
      });
  }
};
</script>
<style>
.my-custom {
  position: absolute !important;
  margin-top: 120px;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
}

.custom-input .form-control {
  border-radius: 500px !important;
}
</style>

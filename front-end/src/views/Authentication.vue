<template>
  <div>
    <Loader v-if="isLoadingShow"></Loader>
    <section class="section section-shaped section-lg my-0">
      <div class="shape shape-style-1 bg-gradient-default custom-height">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- From đăng nhập -->
      <div class="container pt-lg-md" v-if="isLogin">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <card
              type="secondary"
              shadow
              header-classes="bg-white pb-5"
              body-classes="px-lg-5 py-lg-5"
              class="border-0"
            >
              <template>
                <div class="text-muted text-center mb-3">
                  ĐĂNG NHẬP
                </div>
              </template>
              <template>
                <div class="text-center text-muted mb-4">
                  <small>Tiến hành xác thực danh tính để tiếp tục</small>
                </div>
                <form role="form">
                  <base-input
                    alternative
                    class="mb-3"
                    placeholder="Email"
                    v-model="username"
                    addon-left-icon="ni ni-email-83"
                  >
                  </base-input>
                  <base-input
                    alternative
                    type="password"
                    v-model="password"
                    placeholder="Mật khẩu"
                    addon-left-icon="ni ni-lock-circle-open"
                  >
                  </base-input>
                  <div class="text-center">
                    <base-button
                      type="primary"
                      class="my-4"
                      v-on:click="login()"
                      >Đăng nhập</base-button
                    >
                  </div>
                </form>
              </template>
            </card>
            <div class="row mt-3">
              <div class="col-6">
                <a href="#" class="text-light">
                  <small>Quên mật khẩu?</small>
                </a>
              </div>
              <div class="col-6 text-right">
                <a
                  v-on:click="isLogin = false"
                  class="text-light"
                  style="cursor: pointer"
                >
                  <small>Tạo tài khoản mới</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Kết thúc form đăng nhập -->

      <!-- From đăng ký -->
      <div class="container pt-lg-md" v-if="!isLogin">
        <div class="row justify-content-center">
          <div class="col-lg-5">
            <card
              type="secondary"
              shadow
              header-classes="bg-white pb-5"
              body-classes="px-lg-5 py-lg-5"
              class="border-0"
            >
              <template>
                <div class="text-muted text-center mb-3">
                  ĐĂNG KÝ
                </div>
              </template>
              <template>
                <div class="text-center text-muted mb-4">
                  <small>Tiến hành tạo tài khoản để tham gia dịch vụ</small>
                </div>
                <form role="form">
                  <base-input
                    alternative
                    class="mb-3"
                    placeholder="Họ và tên"
                    addon-left-icon="ni ni-hat-3"
                  >
                  </base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    placeholder="Email"
                    addon-left-icon="ni ni-email-83"
                  >
                  </base-input>
                  <base-input
                    alternative
                    type="password"
                    placeholder="Mật khẩu"
                    addon-left-icon="ni ni-lock-circle-open"
                  >
                  </base-input>
                  <base-input
                    alternative
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    addon-left-icon="ni ni-lock-circle-open"
                  >
                  </base-input>
                  <div class="text-center">
                    <base-button type="primary" class="my-4"
                      >Tạo tài khoản</base-button
                    >
                  </div>
                </form>
              </template>
            </card>
            <div class="row mt-3">
              <div class="col-6"></div>
              <div class="col-6 text-right" style="cursor: pointer">
                <a v-on:click="isLogin = true" class="text-light">
                  <small>Đã có tài khoản?</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Kết thúc form đăn ký -->
    </section>
    <section class="section section-lg pt-lg-0 mt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-check-bold"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-primary text-uppercase">Download Argon</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>
                  <div>
                    <badge type="primary" rounded>design</badge>
                    <badge type="primary" rounded>system</badge>
                    <badge type="primary" rounded>creative</badge>
                  </div>
                  <base-button tag="a" href="#" type="primary" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-istanbul"
                    type="success"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-success text-uppercase">Build Something</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>
                  <div>
                    <badge type="success" rounded>business</badge>
                    <badge type="success" rounded>vision</badge>
                    <badge type="success" rounded>success</badge>
                  </div>
                  <base-button tag="a" href="#" type="success" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                  </icon>
                  <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>
                  <div>
                    <badge type="warning" rounded>marketing</badge>
                    <badge type="warning" rounded>product</badge>
                    <badge type="warning" rounded>launch</badge>
                  </div>
                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="img/theme/promo-1.png" class="img-fluid floating" />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <icon
                name="ni ni-settings-gear-65"
                class="mb-5"
                size="lg"
                type="success"
                shadow
                rounded
              ></icon>
              <h3>Awesome features</h3>
              <p>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go.
              </p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-settings-gear-65"
                    ></badge>
                    <h6 class="mb-0">Carefully crafted components</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-html5"
                    ></badge>
                    <h6 class="mb-0">Amazing page examples</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="success"
                      circle
                      class="mr-3"
                      icon="ni ni-satisfied"
                    ></badge>
                    <h6 class="mb-0">Super friendly support team</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div class="card bg-default shadow border-0">
              <img
                v-lazy="'img/theme/img-1-1200x1000.jpg'"
                class="card-img-top"
              />
              <blockquote class="card-blockquote">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="svg-bg"
                >
                  <polygon
                    points="0,52 583,95 0,95"
                    class="fill-default"
                  ></polygon>
                  <polygon
                    points="0,42 583,95 683,0 0,95"
                    opacity=".2"
                    class="fill-default"
                  ></polygon>
                </svg>
                <h4 class="display-3 font-weight-bold text-white">
                  Design System
                </h4>
                <p class="lead text-italic text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pl-md-5">
              <icon
                name="ni ni-settings"
                class="mb-5"
                size="lg"
                type="warning"
                shadow
                rounded
              ></icon>

              <h3>Our customers</h3>
              <p class="lead">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go.
              </p>
              <p>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go.
              </p>
              <a href="#" class="font-weight-bold text-warning mt-5"
                >A beautiful UI Kit for impactful websites</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container py-0">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <img src="img/ill/ill-2.svg" class="img-center img-fluid" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="d-flex px-3">
              <div>
                <icon
                  name="ni ni-building"
                  size="lg"
                  class="bg-gradient-white"
                  color="primary"
                  shadow
                  rounded
                ></icon>
              </div>
              <div class="pl-4">
                <h4 class="display-3 text-white">Modern Interface</h4>
                <p class="text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p>
              </div>
            </div>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon
                    name="ni ni-satisfied"
                    gradient="success"
                    color="white"
                    shadow
                    rounded
                  ></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-success">Awesome Support</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                  <a href="#" class="text-success">Learn more</a>
                </div>
              </div>
            </card>
            <card shadow class="shadow-lg--hover mt-5">
              <div class="d-flex px-3">
                <div>
                  <icon
                    name="ni ni-active-40"
                    gradient="warning"
                    color="white"
                    shadow
                    rounded
                  ></icon>
                </div>
                <div class="pl-4">
                  <h5 class="title text-warning">Modular Components</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                  <a href="#" class="text-warning">Learn more</a>
                </div>
              </div>
            </card>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-lg">
          <div class="col-lg-8">
            <h2 class="display-3">The amazing Team</h2>
            <p class="lead text-muted">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        <div class="row justify-content-center text-center">
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-1-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Nguyễn Trọng Nghĩa</span>
                  <small class="h6 text-muted">Back-end</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="warning"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-2-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Hoàng Thiên Phú</span>
                  <small class="h6 text-muted">Front-end</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="primary"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-3-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Alexander Smith</span>
                  <small class="h6 text-muted">UI/UX Designer</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="info"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <img
                v-lazy="'img/theme/team-4-800x800.jpg'"
                class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                style="width: 200px;"
              />
              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">John Doe</span>
                  <small class="h6 text-muted">Founder and CEO</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-twitter"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-facebook"
                    rounded
                    icon-only
                  ></base-button>
                  <base-button
                    tag="a"
                    href="#"
                    type="success"
                    icon="fa fa-dribbble"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <section class="section section-lg pt-0">
      <div class="container">
        <card gradient="warning" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white">
                  We made website building easier for you.
                </h3>
                <p class="lead text-white mt-3">
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers. I understand
                  culture.
                </p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <base-button
                  tag="a"
                  href="https://www.creative-tim.com/product/vue-argon-design-system"
                  type="white"
                  block
                  size="lg"
                >
                  Download Vue
                </base-button>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">Build something</h2>
            <p class="lead text-white">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record low
              maximum sea ice extent tihs year down to low ice.
            </p>
          </div>
        </div>
        <div class="row row-grid mt-5">
          <div class="col-lg-4">
            <icon
              name="ni ni-settings"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Building tools</h5>
            <p class="text-white mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-ruler-pencil"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Grow your market</h5>
            <p class="text-white mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="col-lg-4">
            <icon
              name="ni ni-atom"
              size="lg"
              gradient="white"
              shadow
              round
              color="primary"
            ></icon>
            <h5 class="text-white mt-3">Launch time</h5>
            <p class="text-white mt-3">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <card gradient="secondary" shadow body-classes="p-lg-5">
              <h4 class="mb-1">Want to work with us?</h4>
              <p class="mt-0">Your project is very important to us.</p>
              <base-input
                class="mt-5"
                alternative
                placeholder="Your name"
                addon-left-icon="ni ni-user-run"
              >
              </base-input>
              <base-input
                alternative
                placeholder="Email address"
                addon-left-icon="ni ni-email-83"
              >
              </base-input>
              <base-input class="mb-4">
                <textarea
                  class="form-control form-control-alternative"
                  name="name"
                  rows="4"
                  cols="80"
                  placeholder="Type a message..."
                ></textarea>
              </base-input>
              <base-button type="default" round block size="lg">
                Send Message
              </base-button>
            </card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Loader from "../components/Loading.vue";
import { getUser } from "../api/User.js";
export default {
  components: {
    Loader
  },
  data() {
    return {
      isLoadingShow: false,
      isLogin: true,
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username.length < 5 || this.password < 8) {
        this.$Message["error"]({
          background: true,
          content: "Vui lòng nhập đầy đủ thông tin"
        });
      } else {
        this.isLoadingShow = true;
        getUser(this.username, this.password)
          .then(res => {
            if (res.data.id != undefined && res.data.id > 0) {
              var userObj = res.data;
              // Đăng nhập thành công, xử lý ở đây
              this.$Message["success"]({
                background: true,
                content: "Xin chào " + userObj.fullname + "!"
              });
              this.$session.start();
              this.$session.set("USER_INFO", userObj);
              this.$router.push('/profile')
            } else if (res.data == "-1") {
              this.$Message["error"]({
                background: true,
                content: "Đăng nhập thất bại, vui lòng thử lại"
              });
            }
          })
          .catch(e => {
            this.$Message["error"]({
              background: true,
              content: "Đăng nhập thất bại, vui lòng thử lại"
            });
          })
          .finally(() => {
            this.isLoadingShow = false;
            this.password = "";
          });
      }
    }
  }
};
</script>
<style>
.custom-height {
  height: 120% !important;
}
</style>

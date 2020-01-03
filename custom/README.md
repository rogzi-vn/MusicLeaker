# Module bổ sung
## Các chức năng dự định
- Thêm trang phân loại nhạc
- Thêm chức năng tìm kiếm mp3 nhạc bằng link
- Thêm chức năng chuyển đổi youtube sang mp3

VueJS

Vue.js là gì?
Gọi tắt là Vue (phát âm là /vjuː/, giống như view trong tiếng Anh), Vue.js là một framework linh động (nguyên bản tiếng Anh: progressive – tiệm tiến) dùng để xây dựng giao diện người dùng (user interfaces). Khác với các framework nguyên khối (monolithic), Vue được thiết kế từ đầu theo hướng cho phép và khuyến khích việc phát triển ứng dụng theo từng bước. Khi phát triển lớp giao diện (view layer), người dùng chỉ cần dùng thư viện lõi (core library) của Vue, vốn rất dễ học và tích hợp với các thư viện hoặc dự án có sẵn. Cùng lúc đó, nếu kết hợp với những kĩ thuật hiện đại như SFC (single file components) và các thư viện hỗ trợ, Vue cũng đáp ứng được dễ dàng nhu cầu xây dựng những ứng dụng một trang (SPA - Single-Page Applications) với độ phức tạp cao hơn nhiều.

Nếu bạn muốn tìm hiểu thêm về Vue, chúng tôi đã tạo một video clip về những nguyên tắc cốt lõi và một dự án mẫu.

Nếu bạn là một lập trình viên front-end giàu kinh nghiệm và muốn hiểu hơn về tương quan giữa Vue và các thư viện hay framework khác, hãy xem phần So sánh với các framework khác.

Bắt đầu
Nếu bạn chưa quen với lập trình front-end, không nên bắt đầu bằng việc sử dụng một framework – hãy trang bị cho mình vốn kiến thức cơ bản trước đã. Đồng thời, nếu bạn đã có sẵn kinh nghiệm với các framework khác như React hoặc Angular thì tốt, nhưng nếu không thì cũng không sao cả.

Để dùng thử Vue.js, không gì dễ hơn là bắt đầu với một ví dụ Hello World trên JSFiddle. Hãy mở ví dụ này trong một tab khác và làm theo những ví dụ cơ bản mà chúng tôi sẽ nhắc đến dần sau đây. Bạn cũng có thể tạo một file index.html và nhúng thư viện Vue vào:

<!-- bản phát triển (development), bao gồm những cảnh báo hữu ích trong console -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
hoặc:

<!-- bản production, được tối ưu về dung lượng và tốc độ -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
Trang Cài đặt sẽ cung cấp cho bạn nhiều lựa chọn hơn để cài đặt Vue. Lưu ý rằng chúng tôi không khuyến khích việc dùng vue-cli khi bạn chỉ mới bắt đầu, nhất là nếu bạn chưa quen với các công cụ xây dựng (build tools) trên nền tảng Node.js.

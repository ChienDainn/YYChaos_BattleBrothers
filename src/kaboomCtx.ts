// Import thư viện Kaboom.js để tạo game 2D
import kaboom from "kaboom";

// Khởi tạo đối tượng game với cấu hình cụ thể
const k = kaboom({
  width: 1280,         // Đặt chiều rộng cửa sổ game là 1280 pixel
  height: 720,         // Đặt chiều cao cửa sổ game là 720 pixel
  letterbox: true,     // Tự động thêm viền đen để giữ đúng tỉ lệ nếu cửa sổ game bị méo
  global: false,       // Không đưa các hàm Kaboom ra phạm vi toàn cục (phải gọi thông qua biến k)
  debug: false,        // Tắt chế độ debug (ẩn thông tin như hitbox, FPS, v.v.); nên bật khi dev, tắt khi release
});

// Xuất đối tượng k để có thể sử dụng ở các file khác (ví dụ: import k từ './main')
export default k;

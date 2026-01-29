const motorcyclesData = [
    {
        id: "ninja-300",
        name: "Kawasaki Ninja 300",
        price: 145000000,
        priceFormatted: "145.000.000 VNĐ",
        availability: "Còn hàng - Giao ngay",
        images: {
            main: "/IMG/Kawasaki Ninja 300.png",
            gallery: [
                "/IMG/Kawasaki Ninja 300.png",
                "/IMG/Kawasaki Ninja 300.png",
                "/IMG/Kawasaki Ninja 300.png",
                "/IMG/Kawasaki Ninja 300.png"
            ],
            thumbnail: "/IMG/Kawasaki Ninja 300.png"
        },
        specs: {
            engine: "296 cc, 4 thì, 2 xi-lanh song song",
            displacement: "296cc",
            cylinders: "2 xi-lanh song song",
            power: "39 mã lực @ 11,000 rpm",
            torque: "27 Nm @ 10,000 rpm",
            transmission: "6 cấp, ly hợp FCC",
            frontBrake: "Đĩa kép 290mm, ABS",
            rearBrake: "Đĩa đơn 220mm, ABS",
            weight: "172 kg (khô)",
            fuelCapacity: "17 lít",
            fuelConsumption: "3.4 lít/100km",
            maxSpeed: "~180 km/h"
        },
        shortSpecs: [
            "Động cơ: 296 cc, 4 thì, 2 xi-lanh song song",
            "Công suất: 39 mã lực, mô-men xoắn cực đại 27 Nm",
            "Hộp số: 6 cấp, tích hợp ly hợp trượt (FCC)",
            "Tiêu thụ nhiên liệu: Khoảng 3,4 lít/100 km, với bình xăng 17 lít."
        ],
        features: [
            {
                icon: "🏍️",
                title: "Thiết Kế Thể Thao Đẳng Cấp",
                description: "Kiểu dáng Supersport năng động với fairing khí động học, đèn LED full, và bảng đồng hồ LCD hiện đại. Thiết kế lấy cảm hứng từ dòng ZX-10R danh tiếng."
            },
            {
                icon: "⚡",
                title: "Động Cơ Mạnh Mẽ & Tiết Kiệm",
                description: "Động cơ 296cc song song với công nghệ Fuel Injection, cho công suất 39 mã lực mượt mà trên toàn dải tốc độ. Tiêu thụ chỉ 3.4L/100km."
            },
            {
                icon: "🛡️",
                title: "Hệ Thống An Toàn Cao Cấp",
                description: "Trang bị phanh ABS 2 kênh, phanh đĩa kép phía trước 290mm, khung xe thép cao cấp đảm bảo an toàn tối đa cho người lái."
            },
            {
                icon: "💺",
                title: "Thoải Mái Cho Người Lái",
                description: "Vị trí lái thể thao nhưng thoải mái, yên ngồi êm ái phù hợp cho cả chuyến đi dài. Tay lái có thể điều chỉnh."
            },
            {
                icon: "🎨",
                title: "Màu Sơn Cao Cấp",
                description: "Sơn chính hãng Kawasaki với nhiều phối màu thể thao. Lớp sơn bền màu, chống trầy xước và bảo vệ tối ưu."
            },
            {
                icon: "🔊",
                title: "Âm Thanh Đặc Trưng",
                description: "Ống xả thể thao tạo âm thanh đầm và mạnh mẽ đặc trưng của Kawasaki, khẳng định phong cách trên mọi cung đường."
            }
        ],
        colors: [
            {
                name: "Xanh Kawasaki",
                code: "#00ff00",
                gradient: "linear-gradient(135deg, #00ff00, #004d00)",
                isDefault: true
            },
            {
                name: "Đen Nhám",
                code: "#000000",
                gradient: "#000",
                isDefault: false
            },
            {
                name: "Trắng Bạc",
                code: "#ffffff",
                gradient: "linear-gradient(135deg, #fff, #ccc)",
                isDefault: false
            }
        ],
        accessories: [
            {
                name: "Thùng đựng đồ",
                icon: "🧳",
                price: 3500000,
                priceFormatted: "+3.500.000đ"
            },
            {
                name: "Thanh bảo vệ",
                icon: "🛡️",
                price: 2800000,
                priceFormatted: "+2.800.000đ"
            },
            {
                name: "Kính chắn gió",
                icon: "💨",
                price: 1500000,
                priceFormatted: "+1.500.000đ"
            },
            {
                name: "Giá đỡ điện thoại",
                icon: "📱",
                price: 800000,
                priceFormatted: "+800.000đ"
            }
        ],
        promotions: [
            "Tặng 1 bộ áo mưa cao cấp",
            "Tặng 1 nón bảo hiểm fullface",
            "Bảo dưỡng miễn phí 3 lần",
            "Bảo hành 3 năm hoặc 30.000 km"
        ],
        detailPage: "detail-ninja300.html"
    },
    {
        id: "z1000",
        name: "Kawasaki Z1000",
        price: 436400000,
        priceFormatted: "436.400.000 VNĐ",
        availability: "Còn hàng - Giao ngay",
        images: {
            main: "/IMG/z1000.png",
            gallery: [
                "/IMG/z1000.png",
                "/IMG/z1000.png",
                "/IMG/z1000.png",
                "/IMG/z1000.png"
            ],
            thumbnail: "/IMG/z1000.png"
        },
        specs: {
            engine: "4 xi-lanh thẳng hàng, 1043cc",
            displacement: "1043cc",
            cylinders: "4 xi-lanh thẳng hàng",
            power: "142 mã lực @ 10,000 rpm",
            torque: "111 Nm @ 7,300 rpm",
            transmission: "6 cấp, ly hợp ướt đa đĩa",
            frontBrake: "Đĩa kép 310mm, ABS",
            rearBrake: "Đĩa đơn 250mm, ABS",
            weight: "221 kg (khô)",
            fuelCapacity: "17 lít",
            fuelConsumption: "5.4 - 6 lít/100km",
            maxSpeed: "~240 km/h"
        },
        shortSpecs: [
            "Động cơ: 4 xi-lanh thẳng hàng, 1043cc",
            "Công suất: khoảng 142 mã lực",
            "Hộp số: 6 cấp, kết hợp với bộ ly hợp ướt đa đĩa",
            "Tiêu thụ nhiên liệu: Khoảng 5,4 - 6 lít/100 km, với bình xăng 17 lít."
        ],
        features: [
            {
                icon: "🔥",
                title: "Naked Bike Mạnh Mẽ",
                description: "Thiết kế naked bike đầy cơ bắp với động cơ 1043cc cho cảm giác lái mạnh mẽ và phấn khích trên mọi cung đường."
            },
            {
                icon: "⚡",
                title: "Công Suất Vượt Trội",
                description: "142 mã lực với mô-men xoắn 111 Nm mang đến khả năng tăng tốc nhanh chóng và êm ái."
            },
            {
                icon: "🎯",
                title: "Công Nghệ Hiện Đại",
                description: "Hệ thống phanh ABS, đèn LED full, bảng đồng hồ kỹ thuật số TFT đầy đủ thông tin."
            },
            {
                icon: "💪",
                title: "Khung Xe Chắc Chắn",
                description: "Khung xe thép cao cấp, hệ thống treo đa điểm điều chỉnh đảm bảo độ vững chắc và ổn định."
            },
            {
                icon: "🎨",
                title: "Thiết Kế Ấn Tượng",
                description: "Phong cách Sugomi đặc trưng của Kawasaki với đường nét hầm hố và năng động."
            },
            {
                icon: "🏁",
                title: "Trải Nghiệm Đường Trường",
                description: "Thích hợp cho cả đi phố và đường trường với khả năng vận hành đa dạng."
            }
        ],
        colors: [
            {
                name: "Đen Metallic",
                code: "#000000",
                gradient: "linear-gradient(135deg, #1a1a1a, #000)",
                isDefault: true
            },
            {
                name: "Xanh Lime",
                code: "#00ff00",
                gradient: "linear-gradient(135deg, #00ff00, #00aa00)",
                isDefault: false
            },
            {
                name: "Cam Racing",
                code: "#ff6600",
                gradient: "linear-gradient(135deg, #ff8800, #ff4400)",
                isDefault: false
            }
        ],
        accessories: [
            {
                name: "Thùng hông",
                icon: "🧳",
                price: 4500000,
                priceFormatted: "+4.500.000đ"
            },
            {
                name: "Gù bảo vệ",
                icon: "🛡️",
                price: 3200000,
                priceFormatted: "+3.200.000đ"
            },
            {
                name: "Ống xả Akrapovic",
                icon: "🔊",
                price: 18000000,
                priceFormatted: "+18.000.000đ"
            },
            {
                name: "Gắn USB sạc",
                icon: "🔌",
                price: 1200000,
                priceFormatted: "+1.200.000đ"
            }
        ],
        promotions: [
            "Tặng bộ bảo hộ touring cao cấp",
            "Tặng nón Shoei chính hãng",
            "Bảo dưỡng miễn phí 5 lần",
            "Bảo hành 3 năm hoặc 50.000 km",
            "Hỗ trợ trả góp 0% lãi suất"
        ],
        detailPage: "detail-z1000.html"
    },
    {
        id: "ninja-h2",
        name: "Kawasaki Ninja H2",
        price: 295000000,
        priceFormatted: "295.000.000 VNĐ",
        availability: "Đặt hàng trước - Giao sau 2 tuần",
        images: {
            main: "/IMG/Kawasaki_Ninja_H2.jpg",
            gallery: [
                "/IMG/Kawasaki_Ninja_H2.jpg",
                "/IMG/Kawasaki_Ninja_H2.jpg",
                "/IMG/Kawasaki_Ninja_H2.jpg",
                "/IMG/Kawasaki_Ninja_H2.jpg"
            ],
            thumbnail: "/IMG/Kawasaki_Ninja_H2.jpg"
        },
        specs: {
            engine: "Siêu nạp 998 cm³, 4 xi-lanh thẳng hàng",
            displacement: "998cc",
            cylinders: "4 xi-lanh thẳng hàng",
            power: "200+ mã lực (siêu nạp)",
            torque: "137 Nm @ 11,000 rpm",
            transmission: "6 cấp, quickshifter",
            frontBrake: "Đĩa kép 330mm Brembo, ABS",
            rearBrake: "Đĩa đơn 250mm Brembo, ABS",
            weight: "238 kg (khô)",
            fuelCapacity: "17 lít",
            fuelConsumption: "7 - 8 lít/100km",
            maxSpeed: "~300+ km/h"
        },
        shortSpecs: [
            "Động cơ: Siêu nạp 998 cm³, 4 xi-lanh thẳng hàng",
            "Công suất: 200+ mã lực (với siêu nạp)",
            "Phanh: ABS Brembo cao cấp",
            "Bình xăng: 17 lít"
        ],
        features: [
            {
                icon: "🚀",
                title: "Siêu Xe Đường Phố",
                description: "Động cơ siêu nạp độc nhất với công suất hơn 200 mã lực, mang đến trải nghiệm tốc độ đỉnh cao."
            },
            {
                icon: "💎",
                title: "Công Nghệ Tối Thượng",
                description: "Hệ thống siêu nạp Kawasaki độc quyền, quickshifter, traction control, launch control đầy đủ."
            },
            {
                icon: "🎨",
                title: "Thiết Kế Tương Lai",
                description: "Sơn Mirror Coated Spark Black độc đáo, thiết kế khí động học hoàn hảo như từ tương lai."
            },
            {
                icon: "🏆",
                title: "Phanh Brembo Cao Cấp",
                description: "Hệ thống phanh Brembo Stylema cao cấp nhất với ABS Cornering, đảm bảo an toàn tối đa."
            },
            {
                icon: "⚙️",
                title: "Điện Tử Thông Minh",
                description: "Bảng đồng hồ TFT màu 4.3 inch, 3 chế độ lái, cảnh báo đầy đủ, kết nối smartphone."
            },
            {
                icon: "🔊",
                title: "Âm Thanh Đặc Trưng",
                description: "Tiếng còi siêu nạp đặc trưng kết hợp âm thanh xả khủng khiếp tạo nên bản hòa ca tốc độ."
            }
        ],
        colors: [
            {
                name: "Mirror Coated Spark Black",
                code: "#1a1a1a",
                gradient: "linear-gradient(135deg, #2d2d2d, #000)",
                isDefault: true
            },
            {
                name: "Lime Green Edition",
                code: "#00ff00",
                gradient: "linear-gradient(135deg, #00ff00, #006600)",
                isDefault: false
            }
        ],
        accessories: [
            {
                name: "Ống xả Akrapovic Titanium",
                icon: "🔊",
                price: 45000000,
                priceFormatted: "+45.000.000đ"
            },
            {
                name: "Gù carbon fiber",
                icon: "🛡️",
                price: 8500000,
                priceFormatted: "+8.500.000đ"
            },
            {
                name: "Quickshifter Pro",
                icon: "⚙️",
                price: 12000000,
                priceFormatted: "+12.000.000đ"
            },
            {
                name: "Hệ thống camera hành trình",
                icon: "📹",
                price: 15000000,
                priceFormatted: "+15.000.000đ"
            }
        ],
        promotions: [
            "Tặng bộ đồ bảo hộ Alpinestars cao cấp",
            "Tặng nón AGV Pista GP RR",
            "Bảo dưỡng miễn phí trọn đời tại PKL Motors",
            "Bảo hành 5 năm không giới hạn km",
            "Tặng khóa học lái xe an toàn nâng cao"
        ],
        detailPage: "detail-ninja-h2.html"
    }
];

// Hàm helper để lấy xe theo ID
function getMotorcycleById(id) {
    return motorcyclesData.find(bike => bike.id === id);
}

// Hàm helper để lấy tất cả xe
function getAllMotorcycles() {
    return motorcyclesData;
}

// Hàm helper để lọc xe theo giá
function filterByPrice(minPrice, maxPrice) {
    return motorcyclesData.filter(bike => 
        bike.price >= minPrice && bike.price <= maxPrice
    );
}

// Hàm helper để tìm kiếm xe
function searchMotorcycles(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return motorcyclesData.filter(bike => 
        bike.name.toLowerCase().includes(lowerKeyword) ||
        bike.specs.engine.toLowerCase().includes(lowerKeyword)
    );
}

// Export để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        motorcyclesData,
        getMotorcycleById,
        getAllMotorcycles,
        filterByPrice,
        searchMotorcycles
    };
}
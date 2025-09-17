import { nanoid } from "nanoid"

export const initialTabs = [
    {
        id: '1',
        title: 'Mô tả công việc Intern',
        sections: [
            { 
                id: nanoid(5), 
                title: 'I. Yêu cầu đầu vào',
                content: 'Đây là nội dung chi tiết về yêu cầu đầu vào cho vị trí Intern. Ứng viên cần có kiến thức nền tảng về React và JavaScript.'
            },
            { 
                id: nanoid(5), 
                title: 'II. Vai trò chung',
                content: 'Vai trò chung của vị trí Intern bao gồm hỗ trợ team phát triển, tham gia vào các dự án thực tế và học hỏi kinh nghiệm từ các thành viên trong nhóm.'
            },
            { 
                id: nanoid(5), 
                title: 'III. Chi tiết công việc',
                content: 'Chi tiết công việc sẽ bao gồm việc viết code, tham gia họp nhóm, và hoàn thành các nhiệm vụ được giao đúng hạn.'
            },
            { 
                id: nanoid(5), 
                title: '1. Quy trình làm việc',
                content: 'Quy trình làm việc sẽ tuân theo mô hình Agile, với các buổi họp Scrum hàng ngày và các sprint kéo dài hai tuần.'
            },
            { 
                id: nanoid(5), 
                title: '2. Tinh thần làm việc',
                content: 'Tinh thần làm việc cần tích cực, chủ động học hỏi và sẵn sàng hợp tác với các thành viên trong nhóm để đạt được mục tiêu chung.'
            },
            { 
                id: nanoid(5), 
                title: '3. Thời gian làm việc',
                content: 'Thời gian làm việc linh hoạt, nhưng ưu tiên các bạn có thể làm việc ít nhất 20 giờ mỗi tuần trong suốt thời gian thực tập.'
            },
            { 
                id: nanoid(5), 
                title: '4. Cơ hội',
                content: 'Cơ hội phát triển nghề nghiệp, học hỏi từ các chuyên gia trong ngành và có thể được cân nhắc cho vị trí chính thức sau kỳ thực tập.'
            }
        ],
    },
    {
        id: '2',
        title: 'Tài liệu dự án ABC',
        sections: [
            { 
                id: nanoid(5),
                title: 'A. Giới thiệu',
                content: 'Dự án ABC nhằm mục tiêu phát triển một ứng dụng web hiện đại sử dụng React và Node.js để quản lý công việc hiệu quả.'
            },
            { 
                id: nanoid(5),
                title: 'B. Phân tích yêu cầu',
                content: 'Yêu cầu chính của dự án bao gồm giao diện người dùng thân thiện, khả năng mở rộng và tích hợp với các dịch vụ bên thứ ba như Google Calendar và Slack.'
            },
            { 
                id: nanoid(5),
                title: 'C. Thiết kế cơ sở dữ liệu',
                content: 'Cơ sở dữ liệu sẽ được thiết kế sử dụng MongoDB, với các bảng chính bao gồm Users, Projects, Tasks và Comments để lưu trữ thông tin người dùng và công việc.'
            }
        ]
    },
    { 
        id: 3, 
        title: 'Báo cáo tuần', 
        sections: [
            { 
                id: nanoid(5),
                title: 'Tuần 1',
                content: 'Trong tuần 1, tôi đã hoàn thành việc tìm hiểu về yêu cầu dự án và thiết lập môi trường phát triển. Tôi cũng đã bắt đầu làm quen với codebase hiện tại và tham gia vào các cuộc họp nhóm để hiểu rõ hơn về tiến độ dự án.'
            },
            { 
                id: nanoid(5),
                title: 'Tuần 2',
                content: 'Tuần 2 tập trung vào việc phát triển các tính năng cơ bản của ứng dụng, bao gồm tạo, chỉnh sửa và xóa công việc. Tôi đã gặp một số thách thức với việc tích hợp API bên thứ ba, nhưng đã giải quyết được thông qua việc tham khảo tài liệu và hỏi ý kiến đồng đội.'
            },
            { 
                id: nanoid(5),
                title: 'Tuần 3',
                content: 'Trong tuần 3, tôi đã hoàn thiện các tính năng còn lại và bắt đầu viết các bài kiểm thử để đảm bảo chất lượng mã nguồn. Tôi cũng đã tham gia vào quá trình đánh giá mã nguồn với các thành viên trong nhóm để nhận phản hồi và cải thiện kỹ năng lập trình của mình.'
            }
        ]
    },
]

// export const mockSections = [
//     { id: 1, title: 'I. Yêu cầu đầu vào' },
//     { id: 2, title: 'II. Vai trò chung' },
//     { id: 3, title: 'III. Chi tiết công việc' },
//     { id: 4, title: '1. Quy trình làm việc', isSub: true },
//     { id: 5, title: '2. Tinh thần làm việc', isSub: true },
//     { id: 6, title: '3. Thời gian làm việc', isSub: true },
//     { id: 7, title: '4. Cơ hội', isSub: true }
// ]
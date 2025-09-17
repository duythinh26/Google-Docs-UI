import { nanoid } from "nanoid"

export const initialTabs = [
    {
        id: '1',
        title: 'Mô tả công việc Intern',
        sections: [
            { id: nanoid(5), title: 'I. Yêu cầu đầu vào' },
            { id: nanoid(5), title: 'II. Vai trò chung' },
            { id: nanoid(5), title: 'III. Chi tiết công việc' },
            { id: nanoid(5), title: '1. Quy trình làm việc' },
            { id: nanoid(5), title: '2. Tinh thần làm việc' },
            { id: nanoid(5), title: '3. Thời gian làm việc' },
            { id: nanoid(5), title: '4. Cơ hội' }
        ],
    },
    {
        id: '2',
        title: 'Tài liệu dự án ABC',
        sections: [
            { id: nanoid(5), title: 'A. Giới thiệu' },
            { id: nanoid(5), title: 'B. Phân tích yêu cầu' },
            { id: nanoid(5), title: 'C. Thiết kế cơ sở dữ liệu' }
        ]
    },
    { 
        id: 3, 
        title: 'Báo cáo tuần', 
        sections: [
            { id: nanoid(5), title: 'Tuần 1' },
            { id: nanoid(5), title: 'Tuần 2' },
            { id: nanoid(5), title: 'Tuần 3' }
        ]
    },
]

export const mockSections = [
    { id: 1, title: 'I. Yêu cầu đầu vào' },
    { id: 2, title: 'II. Vai trò chung' },
    { id: 3, title: 'III. Chi tiết công việc' },
    { id: 4, title: '1. Quy trình làm việc', isSub: true },
    { id: 5, title: '2. Tinh thần làm việc', isSub: true },
    { id: 6, title: '3. Thời gian làm việc', isSub: true },
    { id: 7, title: '4. Cơ hội', isSub: true }
]
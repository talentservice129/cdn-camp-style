
export const products = {
    sales: [],
    featured: [],
    plans: {
        budget: [
            {
                name: 'Grass Plan',
                category: 'minecraft',
                platform: 'java',
                price: 6.00,
                currency: 'USD',
                ram: 4092,
                storage: 512,
                cpu_threads: 1,
            },
            {
                name: 'Stone Plan',
                category: 'minecraft',
                platform: 'java',
                price: 12.00,
                currency: 'USD',
                ram: {
                    value: 8192,
                    unit: 'MB',
                },
                storage: {
                    type: 'ssd',
                    size: 1024,
                },
                cpu_threads: 1,
            }
        ],
        premium: [],
        ultimate: [],
        extreme: []
    }
}
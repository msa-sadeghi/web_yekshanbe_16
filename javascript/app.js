 // شبیه‌سازی API Response
        const apiResponse = {
            success: true,
            data: {
                users: [
                    { id: 1, name: 'علی احمدی', email: 'ali@example.com', age: 25 },
                    { id: 2, name: 'سارا محمدی', email: 'sara@example.com', age: 22 },
                    { id: 3, name: 'رضا رضایی', email: 'reza@example.com', age: 28 }
                ],
                count: 3
            }
        };
        
        // Destructuring در سطوح مختلف
        const { success, data: { users, count } } = apiResponse;
        
        console.log(`موفقیت: ${success}`);
        console.log(`تعداد: ${count}`);
        
        // نمایش کاربران با Destructuring
        const usersContainer = document.getElementById('users');
        
        users.forEach(({ name, email, age }) => {
            usersContainer.innerHTML += `
                <div class="user-card">
                    <h3>${name}</h3>
                    <p>📧 ${email}</p>
                    <p>🎂 ${age} سال</p>
                </div>
            `;
        });
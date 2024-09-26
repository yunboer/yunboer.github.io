const express = require('express');
const fs = require('fs-extra');
const path = require('path');
const cors = require('cors'); 

const app = express();
const PORT = 3000;
app.use(cors());

// 生成目录树的函数
function generateDirectoryTree(dir, baseDir) {
    const tree = {};
    const files = fs.readdirSync(dir);

    // 分离文件夹和文件
    const directories = [];
    const filesList = [];

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        const relativePath = path.relative(baseDir, filePath);

        if (stats.isDirectory()) {
            directories.push({ name: file, content: generateDirectoryTree(filePath, baseDir) });
        } else {
            filesList.push({ name: file, path: relativePath.replace(/\\/g, '/') });
        }
    });

    // 对文件夹按名称排序
    directories.sort((a, b) => a.name.localeCompare(b.name));

    // 对文件先按扩展名，再按文件名排序
    filesList.sort((a, b) => {
        const extA = path.extname(a.name).toLowerCase();
        const extB = path.extname(b.name).toLowerCase();
        if (extA !== extB) {
            return extA.localeCompare(extB);
        }
        return a.name.localeCompare(b.name);
    });

    // 先添加排序后的文件夹
    directories.forEach(dir => {
        tree[dir.name] = dir.content;
    });

    // 再添加排序后的文件
    filesList.forEach(file => {
        tree[file.name] = file.path;
    });

    return tree;
}

// 路由处理
app.get('/api/directory-tree', (req, res) => {
    const publicDir = path.join(__dirname, 'public');
    const tree = generateDirectoryTree(publicDir, publicDir);
    res.json(tree);
});

// 为每个文件创建路由
function createFileRoutes(dir, baseDir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        const relativePath = path.relative(baseDir, filePath);

        if (stats.isDirectory()) {
            createFileRoutes(filePath, baseDir);
        } else {
            const route = '/' + relativePath.replace(/\\/g, '/');
            app.get(route, (req, res) => {
                res.sendFile(filePath);
            });
        }
    });
}

// 创建文件路由
const publicDir = path.join(__dirname, 'public');
createFileRoutes(publicDir, publicDir);

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

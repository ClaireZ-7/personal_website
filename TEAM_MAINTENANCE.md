# Team 页面维护说明

Team 页面由 `src/team-members.json` 中的数据自动生成。不要再直接修改
`src/generated-content.ts` 里的旧 Team HTML。

## 推荐方式：使用命令

新增 Team 成员：

```bash
npm run team:member -- \
  --name "Kloe NG" \
  --position "PhD Candidate" \
  --school "Department of Real Estate" \
  --school "NUS" \
  --group team \
  --photo "/完整路径/kloephoto.jpeg" \
  --link "https://example.com/profile"
```

参数说明：

- `--name`：姓名，必填。
- `--position`：职位，例如 `PhD Candidate` 或 `Research Assistant`。
- `--school`：学院或学校，每一行使用一次，可重复填写。
- `--group`：只能填写 `team` 或 `alumni`。
- `--photo`：可选。可以填写电脑中的照片路径，脚本会自动复制到 `public/assets/`。
- `--link`：可选。姓名点击后打开的个人主页、LinkedIn 或 CV。

当前成员会自动排序：所有包含 `PhD` 的职位排在前面，`Research Assistant`
排在后面；每一组内部按姓名最后一个单词（surname）排序。

## 将 Team 成员移到 Alumni

只需要输入姓名和新分组：

```bash
npm run team:member -- --name "Qiuxia GAO" --group alumni
```

原有照片、职位、学院和链接都会保留。

## 更新现有成员

命令会通过姓名查找现有成员，只更新本次提供的字段。例如：

```bash
npm run team:member -- \
  --name "Mokshya WADHWA" \
  --photo "/完整路径/mokshya.jpg"
```

更新学院时需要重新输入希望保留的全部行：

```bash
npm run team:member -- \
  --name "Mokshya WADHWA" \
  --school "Department of Business School" \
  --school "National University of Singapore"
```

删除照片或链接：

```bash
npm run team:member -- --name "Name" --remove-photo true
npm run team:member -- --name "Name" --remove-link true
```

## 直接编辑数据文件

也可以直接编辑 `src/team-members.json`。每位成员的格式如下：

```json
{
  "name": "Full NAME",
  "position": "PhD Candidate",
  "affiliation": ["Department of Real Estate", "NUS"],
  "group": "team",
  "image": "/assets/photo.jpg",
  "link": "https://example.com/profile"
}
```

其中 `image` 和 `link` 可以省略；未提供照片时页面会显示姓名首字母占位。

## 修改后检查

```bash
nvm use
npm run build
```

构建成功后，再通过 `npm run dev` 检查 Team 页的照片裁切、姓名链接和移动端排列。

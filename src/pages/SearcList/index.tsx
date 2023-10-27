import React, { useState } from 'react';
import { Input, List } from 'antd';

const YourComponent = () => {
  // 模拟数据
  const sampleData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Eve' },
    { id: 5, name: '今天' },
    { id: 6, name: '模拟' },
    { id: 7, name: '高亮' },
    { id: 8, name: '列表' },
    { id: 9, name: '试一下' },
    { id: 10, name: '行不行' },
    { id: 11, name: '嗯额嗯嗯' },
  ];

  const [searchText, setSearchText] = useState('');
  
  // 过滤数据以匹配搜索文本
  const filteredData = searchText
    ? sampleData.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
    : sampleData;

  return (
    <div>
      <Input
        placeholder="搜索"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <List
        dataSource={filteredData}
        renderItem={item => (
          <List.Item>
            {searchText
              ? <div
                  dangerouslySetInnerHTML={{
                    __html: item.name.replace(
                      new RegExp(searchText, 'gi'),
                      (match) => `<mark style="color: red;">${match}</mark>`
                    ),
                  }}
                />
              : item.name}
          </List.Item>
        )}
      />
    </div>
  );
};

export default YourComponent;
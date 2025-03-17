import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // 强制使用单引号
      'quotes': ['error', 'single'],
      // 强制在语句末尾使用分号
      'semi': ['error', 'always'],
      // 强制使用两个空格缩进
      'indent': ['error', 2],
      // 对象字面量中键值对之间的空格
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      // 函数括号前是否有空格
      'space-before-function-paren': ['error', { 
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }],
      // 强制使用箭头函数
      'prefer-arrow-callback': 'error',
      // 禁止使用 var
      'no-var': 'error',
      // 禁止使用 with
      'no-with': 'error',
      // 禁止使用未定义的变量
      'no-undef': 'error',
      // 禁止使用未声明的变量
      'no-undeclared-variables': 'error',
    }
  }
];

export default eslintConfig;

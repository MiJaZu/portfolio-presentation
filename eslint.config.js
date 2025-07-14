import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // Configuración base de ESLint
  js.configs.recommended,
  
  // Typescript configuration
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      ...typescript.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-const': 'error',
      '@typescript-eslint/no-var-requires': 'error'
    }
  },

  // Javascript configurations
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'error',
      'prefer-const': 'error',
      'no-var': 'error'
    }
  },

  // Astro configurations
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    rules: {
      'astro/no-set-html-directive': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/valid-compile': 'error',
      'astro/no-conflict-set-directives': 'error',
      'astro/no-deprecated-astro-canonicalurl': 'error',
      'astro/no-deprecated-astro-resolve': 'error',
      'astro/no-deprecated-getentrybyslug': 'error',
      'astro/no-unused-css-selector': 'error',
      'astro/prefer-class-list-directive': 'error',
      'astro/prefer-object-class-list': 'error',
      'astro/prefer-split-class-list': 'error'
    }
  },

  // Global configuration
  {
    rules: {
      // Reglas generales de calidad de código
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off',
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-unreachable': 'error',
      'no-constant-condition': 'error',
      'no-dupe-keys': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-obj-calls': 'error',
      'no-prototype-builtins': 'error',
      'no-sparse-arrays': 'error',
      'no-unexpected-multiline': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error'
    }
  }
];
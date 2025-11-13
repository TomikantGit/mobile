# 🐾 Audoção - App de Adoção de Pets

Aplicativo de adoção de animais desenvolvido com React Native e Expo.

## 🚀 Como rodar no Snack Expo

1. Acesse: https://snack.expo.dev/
2. Crie um novo Snack ou importe este projeto
3. O app está pronto para rodar! 

### Opções para testar:
- **Web**: Clique em "Web" no painel direito
- **Android/iOS**: Escaneie o QR Code com o app Expo Go
- **Simulador**: Use o simulador Android/iOS integrado

## ✨ Funcionalidades

- 🏠 **Tela Inicial**: Navegação entre adotar e publicar pets
- 🔐 **Login/Registro**: Sistema de autenticação (simulado)
- ❤️ **Adotar**: Visualize pets disponíveis para adoção
- 📝 **Publicar**: Adicione novos pets para adoção com foto
- 📸 **Upload de Fotos**: Selecione imagens da galeria

## 🛠️ Tecnologias

- React Native
- Expo
- Expo Linear Gradient
- Expo Image Picker
- Expo Vector Icons

## 📱 Estrutura do Projeto

```
├── App.js                 # Componente principal e navegação
├── screens/
│   ├── HomeScreen.js      # Tela inicial
│   ├── LoginScreen.js     # Tela de login
│   ├── RegisterScreen.js  # Tela de cadastro
│   ├── AdotarScreen.js    # Lista de pets para adoção
│   └── PublicarScreen.js  # Formulário para publicar pet
├── storage/
│   └── petStorage.js      # Gerenciamento de dados (em memória)
└── assets/
    └── snack-icon.png     # Ícone do app

```

## 💡 Notas

- Os dados são armazenados em memória (perdem-se ao recarregar)
- Perfeito para demonstração e testes no Snack
- Para produção, integre com backend e banco de dados real

## 🎨 Design

Interface moderna com:
- Gradientes vibrantes
- Ícones intuitivos
- Animações suaves
- Design responsivo

---

Feito com ❤️ para os animais 🐾

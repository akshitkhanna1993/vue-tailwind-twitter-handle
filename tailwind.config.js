module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
     
      colors:{
        'blue':'#1DA1F2',
        'darkblue':'#2795D9',
        'lightblue':'#EFF9FF',
        'dark':'#657786',
        'light':'#AAB8C2',
        'lighter':'#E1E8ED',
        'lightest':'#F5F8FA',
      }
    },
    container:{
     center:true
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}

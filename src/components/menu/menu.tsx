import MenuItem from '@/components/menu/menu-item'

const MENU_ITEMS = [
  { name: 'Контакт', to: '/contact' },
  { name: 'О себе', to: '/about' },
  { name: "Вопросы", to: '/faqs' },
  { name: 'Поддержка', to: '/support' },
]

function Menu({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {MENU_ITEMS.map((link) => (
        <MenuItem key={link.name} to={link.to} name={link.name} />
      ))}
    </ul>
  )
}

export default Menu

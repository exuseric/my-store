import * as Nav from '@radix-ui/react-navigation-menu'
import { Button, Container, Flex, Box, DropdownMenu, Link as ThemeLink } from "@radix-ui/themes"
import { BoxIcon } from "@radix-ui/react-icons"

import style from './mainNav.module.css'
import Link from 'next/link'

async function getCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories')

    if (!res.ok) throw new Error('Failed to get categories')

    return res.json()
}

export default async function MainNavigation() {
    const categories = await getCategories()
    return (
        <header className={style.navbar}>
            <Container size={'4'}>
                <Flex display={'flex'} justify={'between'} align={'center'}>
                    <Link href={'/'} className={style.logo}>
                        My Store
                    </Link>
                    <nav className={style.nav}>
                        <Flex display={'flex'} justify={'between'} align={'center'} gap={'3'}>
                            <Link href={'/'}>Home</Link>
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    {/* <Button variant={'ghost'}>
                                        Category
                                    </Button> */}
                                    <ThemeLink href='/category'>Category</ThemeLink>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content className={style.dropdown} align={'center'}>
                                    {categories.map(category => (
                                        <ThemeLink href={`/category/${category}`} style={{ textTransform: 'capitalize', padding: '0.45rem' }} key={category}>{category}</ThemeLink>
                                    ))}
                                    <DropdownMenu.Separator />
                                    <ThemeLink href='/category' style={{ background: 'var(--custom-primary)', color: 'var(--custom-secondary)', padding: '0.45rem', textAlign: 'center' }}>All Categories</ThemeLink>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                            <Link href={'/contact-us'}>Contact Us</Link>
                        </Flex>
                    </nav>
                    <Button variant={'soft'}>Cart</Button>
                </Flex>
            </Container>
        </header>
    )
}

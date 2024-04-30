import { Container, Heading, Link, Grid, Section, Box, Button, Flex } from "@radix-ui/themes";
import ProductGrid from "../components/productGrid";
import ProductCardGrid from "../components/productCardGrid";
import styles from './category.module.css'

async function getCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories')

    if (!res.ok) throw new Error('Could not get categories')

    return res.json()
}

async function getCategoryProducts() {
    const res = await fetch('https://fakestoreapi.com/products')

    if (!res.ok) throw new Error('Getting by category failed')


    return res.json()
}

export default async function Category() {
    const categories = await getCategories()
    const allProducts = await getCategoryProducts()
    return (
        <Box py={'9'}>
            <Heading as="h1" size={'9'} align={'center'} py={'7'}>All Categories</Heading>
            {categories.map(category => (
                <Section className={styles.container_inner} my={'7'} key={category}>
                    <Container size={"4"} className={styles.category_container} py={'9'} key={category}>
                        <Heading as="h2" align={'left'} size={'7'} style={{ textTransform: 'capitalize' }} className={styles.category_title}>
                            <Link href={`/category/${category}`}>
                                {category}
                            </Link>
                        </Heading>
                        <Grid columns={{ initial: '1', md: `repeat(3, 1fr)` }} rows='repeat(auto, 1fr)' gap={'3'} py={'7'} align={'center'} justify={'between'}>
                            {allProducts.filter(product => product.category === category).map((product, index) => (
                                <ProductCardGrid product={product} key={product[index]?.id}/>
                            ))}
                        </Grid>

                        <Flex>
                            <Button variant={'solid'} size={'4'}>View All</Button>
                        </Flex>
                    </Container>
                </Section>
            ))}
        </Box>
    )
}
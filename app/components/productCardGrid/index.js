import { Link, Flex, Box, Text } from "@radix-ui/themes";
import Image from 'next/image'
import styles from './productCardGrid.module.css';

export default function ProductCardGrid({ product }) {
    return (
        <Link href={`/product/${product.id}`} className={styles.card_container} key={product.id}>
            <Flex as="article" display={'flex'} direction={'column'} gap={'3'} align={'center'} justify={'between'} className={styles.card}>
                <Box maxWidth={'250px'} maxHeight={"250px"} height={'250px'}>
                    <Image src={product.image} width={250} height={250} alt={product.title}
                        style={{ objectFit: "contain", objectPosition: "center", maxWidth: '100%', height: "250px", maxHeight: '250px' }} loading="lazy" />
                </Box>
                <Flex direction={'column'} gap={'2'} align={'start'}>
                    <Text wrap={'pretty'} align={'left'} weight={'normal'} className={styles.product_title}>{product.title}</Text>
                    <Text wrap={'pretty'} align={'left'} weight={'bold'} size={'4'}>
                        {product.price}
                    </Text>
                </Flex>
            </Flex>
        </Link>
    )
}
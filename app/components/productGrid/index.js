import { Grid } from "@radix-ui/themes";
import ProductCardGrid from "../productCardGrid";

export default function productGrid({ column_count, products }) {
    return (
        <Grid columns={{ initial: '1', md: `repeat(${column_count}, 1fr)` }} rows='repeat(auto, 1fr)' gap={'3'} py={'7'} align={'center'} justify={'between'}>
            {products?.map((product, idx) => (
                <ProductCardGrid product={product} key={idx} />
            ))}
        </Grid>
    )
}
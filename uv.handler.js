import { createBareServer } from '@tomphttp/bare-server-node';

const bare = createBareServer('/bare/');
bare.listen(8080, () => {
    console.log("Ultraviolet Bare Server is running on port 8080");
});

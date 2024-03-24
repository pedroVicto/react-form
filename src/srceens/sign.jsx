import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Checkbox } from "@/components/ui/checkbox"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import handcodingbro from '../assets/Hand coding-bro.svg';
import securityonbro from '../assets/Security On-bro.svg';
import softwaretesterrafiki from '../assets/software tester-rafiki.svg'


export function SignIn() {
    return (
        <main className="h-screen flex w-full">
            <div className="bg-primary-foreground w-full h-full flex p-16">
                <Carousel className="w-full max-w-xl">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="flex aspect-square bg-background rounded p-8">
                                <img src={handcodingbro} alt="pessoa programando" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex aspect-square bg-background rounded p-8">
                                <img src={securityonbro} alt="pessoa programando" />
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex aspect-square bg-background rounded p-8">
                                <img src={softwaretesterrafiki} alt="pessoa programando" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
            <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold tracking-tighter">Entre com sua conta</CardTitle>
                        <CardDescription>utilize e-mail e senha ou o github para entrar</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <Label htmlFor="email">Seu melhor e-mail.</Label>
                            <Input id="email" placeholder="exemplo@email.com" type="email" />
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="password">Digite sua senha</Label>
                            <Input id="passeord" placeholder="uma senha dificil" type="password" />
                        </div>
                        <Button className="mt-6 w-full">Entrar</Button>
                        <div className="flex items-center gap-6 mt-4">
                            <Separator />
                                <span className="text-xs text-muted-foreground" >ou</span>
                            <Separator />
                        </div>
                        <Button variant="outline" className="mt-6 w-full"><GitHubLogoIcon/> Entrar com github</Button>
                    </CardContent>
                    <CardFooter>
                        <p className="text-muted-foreground text-center text-xs">Ao entrar em nossa plataforma você concorda com nosso termos e condições e políticas de privacidade</p>
                        <Checkbox/>
                    </CardFooter>
                    
                </Card>
            </section>
        </main>


    )
}
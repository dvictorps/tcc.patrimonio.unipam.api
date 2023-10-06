import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto, RegisterDto } from './dto'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { jwtSecret } from '../utils/constants'
import { Request, Response } from 'express'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    async signup(dto: RegisterDto) {
        const { Email, Senha, IdTipoPessoa, Usuario, Nome } = dto;


        const defaultType = IdTipoPessoa ? IdTipoPessoa : 2;
        const [checkTypePerson, foundEmail, foundUser] = await Promise.all([
            this.prisma.tipopessoa.findUnique({ where: { IdTipoPessoa: defaultType } }),
            this.prisma.pessoa.findUnique({ where: { Usuario: Usuario } }),
            this.prisma.pessoa.findUnique({ where: { Email: Email } }),
        ]);

        if (!checkTypePerson) throw new BadRequestException('esse tipo de pessoa não existe.')

        if (foundUser || foundEmail) {
            throw new BadRequestException('Email ou Usuário já existe')
        }



        const hashedPassword = await this.hashPassword(Senha)

        await this.prisma.pessoa.create({
            data: {
                Email: Email,
                Senha: hashedPassword,
                Usuario: Usuario,
                Nome: Nome,
                situacaopessoa: { connect: { IdSituacaoPessoa: 1 } },
                tipopessoa: { connect: { IdTipoPessoa: defaultType } },
            }
        })

        return { message: 'O usuário foi cadastrado com sucesso' }

    }

    async signin(dto: AuthDto, req: Request, res: Response) {
        const { Usuario, Senha } = dto;

        const checkUser = await this.prisma.pessoa.findUnique({ where: { Usuario: Usuario } });

        if (!checkUser) throw new BadRequestException('Credenciais incorretas');

        const checkPassword = await this.comparePasswords({ password: Senha, hash: checkUser.Senha })

        if (!checkPassword) throw new BadRequestException('Credenciais incorretas');

        const token = await this.signToken({ id: checkUser.IdPessoa, user: checkUser.Usuario, role: checkUser.IdTipoPessoa, name: checkUser.Nome })

        if (!token) {
            throw new ForbiddenException();
        }

        res.cookie('token', token, { path: '/' })
        return res.send(({ message: "Logado com Sucesso" }));
    }
    async signout(req: Request, res: Response) {

        res.clearCookie('token');
        return res.send({ message: "Deslogado com sucesso" });
    }

    async hashPassword(password: string) {
        const saltOrRounds = 10;

        return await bcrypt.hash(password, saltOrRounds)

    }

    async comparePasswords(args: { password: string, hash: string }) {
        return await bcrypt.compare(args.password, args.hash);
    }

    async signToken(args: { id: number, user: string, role: number, name: string }) {
        const payload = args

        return this.jwt.signAsync(payload, { secret: jwtSecret })
    }

}

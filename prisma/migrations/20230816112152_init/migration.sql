-- CreateTable
CREATE TABLE `agendatreinamentomultimidia` (
    `IdAgendamento` INTEGER NOT NULL,
    `IdPessoa` INTEGER NOT NULL,
    `IdProfessor` INTEGER NOT NULL,
    `DataTreinamento` DATETIME(0) NOT NULL,
    `DataCriacao` DATETIME(0) NOT NULL,
    `DataModificacao` DATETIME(0) NULL,

    INDEX `FKAgendaTrei341844`(`IdProfessor`),
    INDEX `FKAgendaTrei918453`(`IdPessoa`),
    PRIMARY KEY (`IdAgendamento`, `IdPessoa`, `IdProfessor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agendatreinamentosalasinformatica` (
    `IdAgendamento` INTEGER NOT NULL,
    `IdPessoa` INTEGER NOT NULL,
    `IdProfessor` INTEGER NOT NULL,
    `DataTreinamento` DATETIME(0) NOT NULL,
    `DataCriacao` DATETIME(0) NOT NULL,
    `DataModificacao` DATETIME(0) NOT NULL,

    INDEX `FKAgendaTrei647426`(`IdProfessor`),
    INDEX `FKAgendaTrei70817`(`IdPessoa`),
    PRIMARY KEY (`IdAgendamento`, `IdPessoa`, `IdProfessor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `anexonotafiscal` (
    `IdAnexoNotaFiscal` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeArquivo` VARCHAR(100) NOT NULL,
    `ConteudoArquivo` MEDIUMBLOB NOT NULL,
    `TipoArquivo` VARCHAR(20) NOT NULL,
    `TamanhoArquivo` INTEGER NOT NULL,
    `IdNotaFiscal` INTEGER NOT NULL,

    INDEX `FKAnexoNotaF777634`(`IdNotaFiscal`),
    PRIMARY KEY (`IdAnexoNotaFiscal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `armazenamento` (
    `IdDisco` INTEGER NOT NULL AUTO_INCREMENT,
    `ModeloDisco` VARCHAR(20) NOT NULL,
    `TamanhoDisco` INTEGER NOT NULL,
    `IdTipoDisco` TINYINT NOT NULL,
    `IdFabricanteDisco` INTEGER NOT NULL,

    INDEX `FKArmazename648134`(`IdFabricanteDisco`),
    INDEX `FKArmazename849847`(`IdTipoDisco`),
    PRIMARY KEY (`IdDisco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blocodepartamento` (
    `IdBlocoDepartamento` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoBlocoDepartamento` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdBlocoDepartamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blocosala` (
    `IdBlocoSala` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoBlocoSala` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`IdBlocoSala`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoriaequipamento` (
    `IdCategoriaEquipamento` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoCategoriaEquipamento` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdCategoriaEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cidade` (
    `IdCidade` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeCidade` VARCHAR(150) NOT NULL,
    `IdEstado` TINYINT NOT NULL,

    INDEX `FKCidade86950`(`IdEstado`),
    PRIMARY KEY (`IdCidade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comentarioguia` (
    `IdComentarioGuia` INTEGER NOT NULL,
    `IdPessoa` INTEGER NOT NULL,
    `IdGuia` INTEGER NOT NULL,
    `ComentarioGuia` VARCHAR(150) NOT NULL,
    `DataCriacaoComentario` DATETIME(0) NOT NULL,
    `DataModificacaoComentario` DATETIME(0) NULL,

    INDEX `FKComentario204632`(`IdGuia`),
    INDEX `FKComentario227734`(`IdPessoa`),
    PRIMARY KEY (`IdComentarioGuia`, `IdPessoa`, `IdGuia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `concluinteemprestimoequipamento` (
    `IdPessoa` INTEGER NOT NULL,
    `IdPedidoEmprestimo` INTEGER NOT NULL,
    `DataBaixaEmprestimo` DATETIME(0) NOT NULL,
    `IdCondicaoEquipamento` TINYINT NOT NULL,

    INDEX `FKConcluinte288714`(`IdPedidoEmprestimo`),
    INDEX `FKConcluinte534039`(`IdCondicaoEquipamento`),
    PRIMARY KEY (`IdPessoa`, `IdPedidoEmprestimo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `concluinteguia` (
    `IdPessoa` INTEGER NOT NULL,
    `IdGuia` INTEGER NOT NULL,
    `HoraFimAtendimento` DATETIME(0) NOT NULL,

    INDEX `FKConcluinte14257`(`IdGuia`),
    PRIMARY KEY (`IdPessoa`, `IdGuia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `concluintetreinamentomultimidia` (
    `IdPessoa` INTEGER NOT NULL,
    `dProfessor` INTEGER NOT NULL,
    `DataConclusao` DATETIME(0) NOT NULL,

    INDEX `FKConcluinte160518`(`dProfessor`),
    PRIMARY KEY (`IdPessoa`, `dProfessor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `concluintetreinamentosalainformatica` (
    `IdPessoa` INTEGER NOT NULL,
    `IdProfessor` INTEGER NOT NULL,
    `DataConclusao` DATETIME(0) NOT NULL,

    INDEX `FKConcluinte215360`(`IdProfessor`),
    PRIMARY KEY (`IdPessoa`, `IdProfessor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `condicaoemprestimoequipamento` (
    `IdCondicaoEquipamento` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoCondicaoEquipamento` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdCondicaoEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conexaodatashow` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdTipoEntradaDatashow` INTEGER NOT NULL,
    `QuantidadeConexao` TINYINT NOT NULL,

    INDEX `FKConexaoDat803819`(`IdTipoEntradaDatashow`),
    PRIMARY KEY (`IdEquipamento`, `IdTipoEntradaDatashow`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conexaogabinete` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdTipoEntrada` INTEGER NOT NULL,
    `QuantidadeEntrada` TINYINT NOT NULL,

    INDEX `FKConexaoGab869405`(`IdTipoEntrada`),
    PRIMARY KEY (`IdEquipamento`, `IdTipoEntrada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conexaoimpressora` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdTipoEntradaImpressora` TINYINT NOT NULL,
    `QuantidadeConexao` TINYINT NOT NULL,

    INDEX `FKConexaoImp598602`(`IdTipoEntradaImpressora`),
    PRIMARY KEY (`IdEquipamento`, `IdTipoEntradaImpressora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conexaomonitor` (
    `IdTipoEntrada` TINYINT NOT NULL,
    `IdEquipamento` INTEGER NOT NULL,
    `QuantidadeEntrada` TINYINT NOT NULL,

    INDEX `FKConexaoMon334103`(`IdEquipamento`),
    PRIMARY KEY (`IdTipoEntrada`, `IdEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conexaonotebook` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdTipoEntrada` TINYINT NOT NULL,
    `QuantidadeEntrada` TINYINT NOT NULL,

    INDEX `FKConexaoNot273550`(`IdTipoEntrada`),
    PRIMARY KEY (`IdEquipamento`, `IdTipoEntrada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conexaoscanner` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdTipoEntradaScanner` TINYINT NOT NULL,
    `QuantidadeEntrada` TINYINT NOT NULL,

    INDEX `FKConexaoSca55130`(`IdTipoEntradaScanner`),
    PRIMARY KEY (`IdEquipamento`, `IdTipoEntradaScanner`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datashow` (
    `IdEquipamento` INTEGER NOT NULL,
    `Luminosidade` VARCHAR(20) NOT NULL,
    `AutonomiaLampada` VARCHAR(20) NULL,
    `IdTipoLampada` TINYINT NOT NULL,
    `IdResolucao` TINYINT NOT NULL,

    INDEX `FKDatashow515389`(`IdResolucao`),
    INDEX `FKDatashow537981`(`IdTipoLampada`),
    PRIMARY KEY (`IdEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `departamento` (
    `IdDepartamento` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeDepartamento` VARCHAR(150) NOT NULL,
    `IdSituacaoDepartamento` TINYINT NOT NULL,
    `IdBlocoDepartamento` TINYINT NOT NULL,
    `IdTipoDepartamento` TINYINT NOT NULL,

    INDEX `FKDepartamen164819`(`IdSituacaoDepartamento`),
    INDEX `FKDepartamen456004`(`IdTipoDepartamento`),
    INDEX `FKDepartamen983123`(`IdBlocoDepartamento`),
    PRIMARY KEY (`IdDepartamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `empresa` (
    `IdEmpresa` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeEmpresa` VARCHAR(150) NOT NULL,
    `NomeRepresentante` VARCHAR(100) NULL,
    `SiteEmpresa` VARCHAR(150) NULL,
    `EmailEmpresa` VARCHAR(150) NULL,
    `TelefoneEmpresa` INTEGER NULL,
    `IdCidade` INTEGER NOT NULL,

    INDEX `FKEmpresa270845`(`IdCidade`),
    PRIMARY KEY (`IdEmpresa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entradagabinete` (
    `IdTipoEntrada` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoEntradaGabinete` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoEntrada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entradaimpressora` (
    `IdTipoEntradaImpressora` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoEntrada` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoEntradaImpressora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entradamonitor` (
    `IdTipoEntrada` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoEntrada` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoEntrada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entradanotebook` (
    `IdTipoEntrada` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoEntrada` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoEntrada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entradascanner` (
    `IdTipoEntradaScanner` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoEntrada` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoEntradaScanner`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entradasdatashow` (
    `IdTipoEntrada` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoTipoEntrada` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoEntrada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `equipamento` (
    `IdEquipamento` INTEGER NOT NULL AUTO_INCREMENT,
    `Patrimonio` VARCHAR(20) NOT NULL,
    `DescricaoEquipamento` VARCHAR(50) NOT NULL,
    `NumeroSerial` VARCHAR(30) NOT NULL,
    `DataAquisicao` DATE NOT NULL,
    `VencimentoGarantia` DATE NOT NULL,
    `DataCadastro` DATETIME(0) NOT NULL,
    `DataModificacao` DATETIME(0) NULL,
    `IdEmpresa` INTEGER NOT NULL,
    `IdCategoriaEquipamento` INTEGER NOT NULL,
    `IdSituacaoEquipamento` TINYINT NOT NULL,
    `IdFabricante` INTEGER NOT NULL,
    `IdDepartamento` INTEGER NOT NULL,

    UNIQUE INDEX `equipamento_Patrimonio_key`(`Patrimonio`),
    UNIQUE INDEX `equipamento_NumeroSerial_key`(`NumeroSerial`),
    INDEX `FKEquipament269`(`IdCategoriaEquipamento`),
    INDEX `FKEquipament29013`(`IdFabricante`),
    INDEX `FKEquipament310433`(`IdSituacaoEquipamento`),
    INDEX `FKEquipament462011`(`IdEmpresa`),
    INDEX `FKEquipament67720`(`IdDepartamento`),
    PRIMARY KEY (`IdEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `equipamentoemprestimo` (
    `IdEquipamentoEmprestimo` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoItem` VARCHAR(50) NOT NULL,
    `IdCondicaoEquipamento` TINYINT NOT NULL,
    `IdEquipamento` INTEGER NOT NULL,

    INDEX `FKEquipament238464`(`IdEquipamento`),
    INDEX `FKEquipament84856`(`IdCondicaoEquipamento`),
    PRIMARY KEY (`IdEquipamentoEmprestimo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estado` (
    `IdEstado` TINYINT NOT NULL AUTO_INCREMENT,
    `NomeEstado` VARCHAR(50) NOT NULL,
    `UF` VARCHAR(2) NOT NULL,

    PRIMARY KEY (`IdEstado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fabricante` (
    `IdFabricante` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeFabricante` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`IdFabricante`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fabricantedisco` (
    `IdFabricanteDisco` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoFabricante` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdFabricanteDisco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fabricanteplacamae` (
    `IdFabricantePlacaMae` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoFabricante` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdFabricantePlacaMae`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fabricanteprocessador` (
    `IdFabricanteProcessador` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoFabricante` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`IdFabricanteProcessador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fatorformamonitor` (
    `IdFatorForma` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoFatorForma` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdFatorForma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formacontato` (
    `IdFormaContato` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoFormaContato` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdFormaContato`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fotoperfil` (
    `IdFotoPerfil` INTEGER NOT NULL,
    `IdPessoa` INTEGER NOT NULL,
    `NomeFoto` VARCHAR(100) NOT NULL,
    `ConteudoFoto` MEDIUMBLOB NOT NULL,
    `TipoFoto` VARCHAR(20) NOT NULL,
    `TamanhoFoto` INTEGER NOT NULL,

    INDEX `FKFotoPerfil867658`(`IdPessoa`),
    PRIMARY KEY (`IdFotoPerfil`, `IdPessoa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gabinete` (
    `IdEquipamento` INTEGER NOT NULL,
    `DescricaoGabinete` VARCHAR(50) NOT NULL,
    `ProcessadorPlacaMae` VARCHAR(50) NOT NULL,
    `IdSistemaOperacional` TINYINT NOT NULL,

    INDEX `FKGabinete60210`(`IdSistemaOperacional`),
    PRIMARY KEY (`IdEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gabinetearmazenamento` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdDisco` INTEGER NOT NULL,
    `QuantidadeDisco` TINYINT NOT NULL,

    INDEX `FKGabineteAr416396`(`IdDisco`),
    PRIMARY KEY (`IdEquipamento`, `IdDisco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `gabinetememoria` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdMemoria` INTEGER NOT NULL,
    `QuantidadeMemoria` TINYINT NOT NULL,

    INDEX `FKGabineteMe603412`(`IdMemoria`),
    PRIMARY KEY (`IdEquipamento`, `IdMemoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guia` (
    `IdGuia` INTEGER NOT NULL AUTO_INCREMENT,
    `UsuarioSolicitante` VARCHAR(50) NOT NULL,
    `EmailSolicitante` VARCHAR(100) NULL,
    `Assunto` VARCHAR(50) NOT NULL,
    `Mensagem` VARCHAR(250) NOT NULL,
    `DataCriacao` DATETIME(0) NOT NULL,
    `DataModificacao` DATETIME(0) NULL,
    `IdFormaContato` TINYINT NOT NULL,
    `IdSituacaoGuia` TINYINT NOT NULL,
    `IdSetorResponsavel` TINYINT NOT NULL,
    `IdDepartamento` INTEGER NOT NULL,
    `IdPessoa` INTEGER NOT NULL,
    `IdTipoEquipamento` TINYINT NOT NULL,

    INDEX `FKGuia224984`(`IdDepartamento`),
    INDEX `FKGuia558379`(`IdTipoEquipamento`),
    INDEX `FKGuia56053`(`IdPessoa`),
    INDEX `FKGuia684766`(`IdFormaContato`),
    INDEX `FKGuia747950`(`IdSetorResponsavel`),
    INDEX `FKGuia999817`(`IdSituacaoGuia`),
    PRIMARY KEY (`IdGuia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `guiaequipamento` (
    `IdGuiaEquipamento` INTEGER NOT NULL AUTO_INCREMENT,
    `IdGuia` INTEGER NOT NULL,
    `Patrimonio` VARCHAR(20) NOT NULL,

    INDEX `FKGuiaEquipa951499`(`IdGuia`),
    PRIMARY KEY (`IdGuiaEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historicoequipamento` (
    `IdHistoricoMovimentacao` INTEGER NOT NULL,
    `IdEquipamento` INTEGER NOT NULL,
    `IdDepartamento` INTEGER NOT NULL,
    `IdPessoa` INTEGER NOT NULL,
    `DataHoraModificacao` DATETIME(0) NOT NULL,

    INDEX `FKHistoricoE340306`(`IdDepartamento`),
    INDEX `FKHistoricoE509237`(`IdPessoa`),
    INDEX `FKHistoricoE969299`(`IdEquipamento`),
    PRIMARY KEY (`IdHistoricoMovimentacao`, `IdEquipamento`, `IdDepartamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `impressora` (
    `IdEquipamento` INTEGER NOT NULL,
    `FluxoTrabalho` VARCHAR(10) NULL,
    `IdTecnologiaImpressao` TINYINT NOT NULL,
    `IdTamanhoPapel` TINYINT NOT NULL,
    `IdTipoImpressora` TINYINT NOT NULL,
    `IdTipoImpressao` TINYINT NOT NULL,

    INDEX `FKImpressora168655`(`IdTamanhoPapel`),
    INDEX `FKImpressora669800`(`IdTipoImpressao`),
    INDEX `FKImpressora777991`(`IdTecnologiaImpressao`),
    INDEX `FKImpressora900684`(`IdTipoImpressora`),
    PRIMARY KEY (`IdEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marcalampada` (
    `IdMarcaLampada` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoMarcaLampada` VARCHAR(50) NOT NULL,
    `IdTipoLampada` TINYINT NOT NULL,

    INDEX `FKMarcaLampa473381`(`IdTipoLampada`),
    PRIMARY KEY (`IdMarcaLampada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `memoria` (
    `IdMemoria` INTEGER NOT NULL AUTO_INCREMENT,
    `FrequenciaMemoria` VARCHAR(10) NOT NULL,
    `DescricaoTipoMemoria` VARCHAR(10) NOT NULL,
    `TamanhoMemoria` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`IdMemoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `memorianotebook` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdMemoria` INTEGER NOT NULL,
    `QuantidadeModulo` TINYINT NOT NULL,

    INDEX `FKMemoriaNot378409`(`IdMemoria`),
    PRIMARY KEY (`IdEquipamento`, `IdMemoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modelo` (
    `IdModelo` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoModelo` VARCHAR(100) NOT NULL,
    `IdFabricante` INTEGER NOT NULL,

    INDEX `FKModelo98536`(`IdFabricante`),
    PRIMARY KEY (`IdModelo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `monitor` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdTipoDisplay` TINYINT NOT NULL,
    `IdResolucao` TINYINT NOT NULL,
    `IdFatorForma` TINYINT NOT NULL,
    `IdTamanhoMonitor` TINYINT NOT NULL,

    INDEX `FKMonitor296305`(`IdResolucao`),
    INDEX `FKMonitor578333`(`IdTipoDisplay`),
    INDEX `FKMonitor816237`(`IdTamanhoMonitor`),
    INDEX `FKMonitor908066`(`IdFatorForma`),
    PRIMARY KEY (`IdEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notafiscal` (
    `IdNotaFiscal` INTEGER NOT NULL AUTO_INCREMENT,
    `ChaveAcesso` VARCHAR(100) NOT NULL,
    `CNPJ` INTEGER NOT NULL,
    `NomeFantasia` VARCHAR(100) NOT NULL,
    `ValorNota` INTEGER NOT NULL,
    `ValorUnitario` INTEGER NOT NULL,
    `InformacaoAdicionalProduto` VARCHAR(500) NULL,
    `InformacaoComplementar` VARCHAR(500) NULL,
    `IdEmpresa` INTEGER NOT NULL,

    INDEX `FKNotaFiscal77134`(`IdEmpresa`),
    PRIMARY KEY (`IdNotaFiscal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notafiscalequipamento` (
    `IdNotaFiscal` INTEGER NOT NULL,
    `IdEquipamento` INTEGER NOT NULL,

    INDEX `FKNotaFiscal370179`(`IdEquipamento`),
    PRIMARY KEY (`IdNotaFiscal`, `IdEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notebook` (
    `IdEquipamento` INTEGER NOT NULL,
    `TamanhoTela` TINYINT NOT NULL,
    `IdSistemaOperacional` TINYINT NOT NULL,
    `IdProcessador` INTEGER NOT NULL,

    INDEX `FKNotebook113453`(`IdSistemaOperacional`),
    INDEX `FKNotebook872399`(`IdProcessador`),
    PRIMARY KEY (`IdEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `numeroip` (
    `IdDepartamento` INTEGER NOT NULL,
    `Equipamento` INTEGER NOT NULL,
    `NumeroIp` INTEGER NOT NULL,

    INDEX `FKNumeroIp873993`(`Equipamento`),
    PRIMARY KEY (`IdDepartamento`, `Equipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ocorrencia` (
    `IdOcorrencia` INTEGER NOT NULL,
    `IdGuia` INTEGER NOT NULL,
    `IdSala` INTEGER NOT NULL,
    `IdProfessor` INTEGER NOT NULL,

    INDEX `FKOcorrencia253641`(`IdGuia`),
    INDEX `FKOcorrencia268737`(`IdSala`),
    INDEX `FKOcorrencia602115`(`IdProfessor`),
    PRIMARY KEY (`IdOcorrencia`, `IdGuia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidoemprestimoequipamento` (
    `IdPedidoEmprestimo` INTEGER NOT NULL AUTO_INCREMENT,
    `IdPessoa` INTEGER NOT NULL,
    `IdSituacaoEmprestimoEquipamento` TINYINT NOT NULL,
    `NomeSolicitante` VARCHAR(150) NOT NULL,
    `EmailSolicitante` VARCHAR(150) NOT NULL,
    `CpfSolicitante` VARCHAR(11) NOT NULL,
    `DataEmprestimo` DATETIME(0) NOT NULL,
    `DataPrevisaoEntrega` DATE NOT NULL,

    INDEX `FKPedidoEmpr906314`(`IdSituacaoEmprestimoEquipamento`),
    INDEX `FKPedidoEmpr921077`(`IdPessoa`),
    PRIMARY KEY (`IdPedidoEmprestimo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidoequipamento` (
    `IdPedidoEmprestimo` INTEGER NOT NULL,
    `IdEquipamentoEmprestimo` INTEGER NOT NULL,

    INDEX `FKPedidoEqui382095`(`IdEquipamentoEmprestimo`),
    PRIMARY KEY (`IdPedidoEmprestimo`, `IdEquipamentoEmprestimo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pessoa` (
    `IdPessoa` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(150) NOT NULL,
    `Email` VARCHAR(150) NOT NULL,
    `Usuario` VARCHAR(20) NOT NULL,
    `Senha` VARCHAR(60) NOT NULL,
    `DataCriacao` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `DataModificacao` DATETIME(0) NULL,
    `IdTipoPessoa` TINYINT NOT NULL,
    `IdSituacaoPessoa` TINYINT NOT NULL,

    UNIQUE INDEX `pessoa_Email_key`(`Email`),
    UNIQUE INDEX `pessoa_Usuario_key`(`Usuario`),
    INDEX `FKPessoa159743`(`IdSituacaoPessoa`),
    INDEX `FKPessoa688008`(`IdTipoPessoa`),
    PRIMARY KEY (`IdPessoa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `placamae` (
    `IdPlacaMae` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoModelo` VARCHAR(20) NOT NULL,
    `IdFabricantePlacaMae` INTEGER NOT NULL,
    `IdSocket` TINYINT NOT NULL,

    INDEX `FKPlacaMae368543`(`IdSocket`),
    INDEX `FKPlacaMae427829`(`IdFabricantePlacaMae`),
    PRIMARY KEY (`IdPlacaMae`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `processador` (
    `IdProcessador` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeProcessador` VARCHAR(20) NOT NULL,
    `FrequenciaMaxima` VARCHAR(10) NOT NULL,
    `QuantidadeNucleo` TINYINT NOT NULL,
    `QuantidadeThread` TINYINT NULL,
    `IdFabricanteProcessador` TINYINT NOT NULL,
    `IdSocket` TINYINT NOT NULL,

    INDEX `FKProcessado685393`(`IdSocket`),
    INDEX `FKProcessado686817`(`IdFabricanteProcessador`),
    PRIMARY KEY (`IdProcessador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professor` (
    `IdProfessor` INTEGER NOT NULL AUTO_INCREMENT,
    `NomeProfessor` VARCHAR(150) NOT NULL,
    `EmailProfessor` VARCHAR(100) NOT NULL,
    `EmailAlternativo` VARCHAR(100) NULL,
    `IdSituacaoProfessor` TINYINT NOT NULL,
    `IdSituacaoTreinamentoMultimidia` TINYINT NOT NULL,
    `IdSituacaoTreinamentoSalaInformatica` TINYINT NOT NULL,

    INDEX `FKProfessor133994`(`IdSituacaoTreinamentoMultimidia`),
    INDEX `FKProfessor49846`(`IdSituacaoTreinamentoSalaInformatica`),
    INDEX `FKProfessor59`(`IdSituacaoProfessor`),
    PRIMARY KEY (`IdProfessor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resolucaodatashow` (
    `IdResolucao` TINYINT NOT NULL AUTO_INCREMENT,
    `ResolucaoMaximaNativa` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdResolucao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resolucaomonitor` (
    `IdResolucao` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoResolucao` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdResolucao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `responsavelguia` (
    `IdPessoa` INTEGER NOT NULL,
    `IdGuia` INTEGER NOT NULL,
    `HoraInicioAtendimento` DATETIME(0) NOT NULL,

    INDEX `FKResponsave517807`(`IdGuia`),
    PRIMARY KEY (`IdPessoa`, `IdGuia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sala` (
    `IdSala` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoSala` VARCHAR(10) NOT NULL,
    `IdBlocoSala` TINYINT NOT NULL,
    `IdSituacaoSala` TINYINT NOT NULL,
    `IdTipoSala` TINYINT NOT NULL,

    INDEX `FKSala213085`(`IdTipoSala`),
    INDEX `FKSala39636`(`IdBlocoSala`),
    INDEX `FKSala646356`(`IdSituacaoSala`),
    PRIMARY KEY (`IdSala`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scanner` (
    `IdEquipamento` INTEGER NOT NULL,
    `IdTipoScanner` TINYINT NOT NULL,
    `IdTamanhoPapel` TINYINT NOT NULL,

    INDEX `FKScanner353413`(`IdTamanhoPapel`),
    INDEX `FKScanner657642`(`IdTipoScanner`),
    PRIMARY KEY (`IdEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `serieequipamento` (
    `IdSerieEquipamento` INTEGER NOT NULL AUTO_INCREMENT,
    `IdEquipamento` INTEGER NOT NULL,
    `Serie` TINYINT NOT NULL,
    `NumeroSequencial` INTEGER NOT NULL,

    INDEX `FKSerieEquip744704`(`IdEquipamento`),
    PRIMARY KEY (`IdSerieEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `setorresponsavel` (
    `IdSetorResponsavel` TINYINT NOT NULL AUTO_INCREMENT,
    `NomeSetorResponsavel` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdSetorResponsavel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sistemaoperacional` (
    `IdSistemaOperacional` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSistemaOperacional` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`IdSistemaOperacional`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaodepartamento` (
    `IdSituacaoDepartamento` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacaoDepartamento` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`IdSituacaoDepartamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaoemprestimoequipamento` (
    `IdSituacaoEmprestimoEquipamento` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacaoEmprestimo` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdSituacaoEmprestimoEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaoequipamento` (
    `IdSituacaoEquipamento` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacaoEquipamento` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdSituacaoEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaoguia` (
    `IdSituacaoGuia` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacao` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdSituacaoGuia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaoincidente` (
    `IdSituacaoIncidente` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacaoIncidente` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdSituacaoIncidente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaoincidente_pessoa` (
    `IdIncidente` INTEGER NOT NULL,
    `IdSituacaoIncidente` TINYINT NOT NULL,
    `IdPessoa` INTEGER NOT NULL,
    `NomePessoa` VARCHAR(150) NOT NULL,
    `EmailPessoa` VARCHAR(150) NULL,
    `DescricaoIncidente` VARCHAR(500) NOT NULL,
    `DataCriacao` DATETIME(0) NOT NULL,

    INDEX `FKSituacaoIn797509`(`IdPessoa`),
    INDEX `FKSituacaoIn939305`(`IdSituacaoIncidente`),
    PRIMARY KEY (`IdIncidente`, `IdSituacaoIncidente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaopessoa` (
    `IdSituacaoPessoa` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacaoPessoa` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`IdSituacaoPessoa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaoprofessor` (
    `IdSituacaoProfessor` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacaoProfessor` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdSituacaoProfessor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaosala` (
    `IdSituacaoSala` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacaoSala` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`IdSituacaoSala`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaotreinamentomultimidia` (
    `IdSituacaoTreinamentoMultimidia` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacaoTreinamentoMultimidia` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`IdSituacaoTreinamentoMultimidia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `situacaotreinamentosalainformatica` (
    `IdSituacaoTreinamentoSalaInformatica` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSituacaoTreinamentoSalaInformatica` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`IdSituacaoTreinamentoSalaInformatica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `slotplacamae` (
    `IdSlotPlacaMae` INTEGER NOT NULL AUTO_INCREMENT,
    `DescricaoSlot` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdSlotPlacaMae`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `slotsplacamae` (
    `IdSlotPlacaMae` INTEGER NOT NULL,
    `IdPlacaMae` INTEGER NOT NULL,
    `QuantidadeSlot` TINYINT NOT NULL,

    INDEX `FKSlotsPlaca696022`(`IdPlacaMae`),
    PRIMARY KEY (`IdSlotPlacaMae`, `IdPlacaMae`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `socketprocessador` (
    `IdSocket` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoSoquete` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`IdSocket`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tamanhomonitor` (
    `IdTamanhoMonitor` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTamanhoMonitor` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTamanhoMonitor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tamanhopapel` (
    `IdTamanhoPapel` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTamanhoPapel` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTamanhoPapel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tecnologiaimpressao` (
    `IdTecnologiaImpressao` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTecnologiaImpressao` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTecnologiaImpressao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipodepartamento` (
    `IdTipoDepartamento` TINYINT NOT NULL AUTO_INCREMENT,
    `TipoDepartamento` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`IdTipoDepartamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipodisco` (
    `IdTipoDisco` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoDisco` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoDisco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipodisplay` (
    `IdTipoDisplay` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoDisplay` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoDisplay`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipoequipamento` (
    `IdTipoEquipamento` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoEquipamento` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoEquipamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipoimpressao` (
    `IdTipoImpressao` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoImpressao` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoImpressao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipoimpressora` (
    `IdTipoImpressora` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoImpressora` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoImpressora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipolampada` (
    `IdTipoLampada` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoLampada` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`IdTipoLampada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipopessoa` (
    `IdTipoPessoa` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoPessoa` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoPessoa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tiposala` (
    `IdTipoSala` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoSala` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoSala`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tiposcanner` (
    `IdTipoScanner` TINYINT NOT NULL AUTO_INCREMENT,
    `DescricaoTipoScanner` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`IdTipoScanner`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trocalampada` (
    `IdTrocaLampada` INTEGER NOT NULL AUTO_INCREMENT,
    `DataTrocaLampada` DATE NOT NULL,
    `DescricaoReparo` VARCHAR(500) NOT NULL,
    `IdEquipamento` INTEGER NOT NULL,

    INDEX `FKTrocaLampa622616`(`IdEquipamento`),
    PRIMARY KEY (`IdTrocaLampada`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `agendatreinamentomultimidia` ADD CONSTRAINT `FKAgendaTrei341844` FOREIGN KEY (`IdProfessor`) REFERENCES `professor`(`IdProfessor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `agendatreinamentomultimidia` ADD CONSTRAINT `FKAgendaTrei918453` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `agendatreinamentosalasinformatica` ADD CONSTRAINT `FKAgendaTrei647426` FOREIGN KEY (`IdProfessor`) REFERENCES `professor`(`IdProfessor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `agendatreinamentosalasinformatica` ADD CONSTRAINT `FKAgendaTrei70817` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `anexonotafiscal` ADD CONSTRAINT `FKAnexoNotaF777634` FOREIGN KEY (`IdNotaFiscal`) REFERENCES `notafiscal`(`IdNotaFiscal`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `armazenamento` ADD CONSTRAINT `FKArmazename648134` FOREIGN KEY (`IdFabricanteDisco`) REFERENCES `fabricantedisco`(`IdFabricanteDisco`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `armazenamento` ADD CONSTRAINT `FKArmazename849847` FOREIGN KEY (`IdTipoDisco`) REFERENCES `tipodisco`(`IdTipoDisco`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cidade` ADD CONSTRAINT `FKCidade86950` FOREIGN KEY (`IdEstado`) REFERENCES `estado`(`IdEstado`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `comentarioguia` ADD CONSTRAINT `FKComentario204632` FOREIGN KEY (`IdGuia`) REFERENCES `guia`(`IdGuia`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `comentarioguia` ADD CONSTRAINT `FKComentario227734` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `concluinteemprestimoequipamento` ADD CONSTRAINT `FKConcluinte112622` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `concluinteemprestimoequipamento` ADD CONSTRAINT `FKConcluinte288714` FOREIGN KEY (`IdPedidoEmprestimo`) REFERENCES `pedidoemprestimoequipamento`(`IdPedidoEmprestimo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `concluinteemprestimoequipamento` ADD CONSTRAINT `FKConcluinte534039` FOREIGN KEY (`IdCondicaoEquipamento`) REFERENCES `condicaoemprestimoequipamento`(`IdCondicaoEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `concluinteguia` ADD CONSTRAINT `FKConcluinte14257` FOREIGN KEY (`IdGuia`) REFERENCES `guia`(`IdGuia`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `concluinteguia` ADD CONSTRAINT `FKConcluinte418109` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `concluintetreinamentomultimidia` ADD CONSTRAINT `FKConcluinte160518` FOREIGN KEY (`dProfessor`) REFERENCES `professor`(`IdProfessor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `concluintetreinamentomultimidia` ADD CONSTRAINT `FKConcluinte198192` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `concluintetreinamentosalainformatica` ADD CONSTRAINT `FKConcluinte215360` FOREIGN KEY (`IdProfessor`) REFERENCES `professor`(`IdProfessor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `concluintetreinamentosalainformatica` ADD CONSTRAINT `FKConcluinte791969` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaodatashow` ADD CONSTRAINT `FKConexaoDat803819` FOREIGN KEY (`IdTipoEntradaDatashow`) REFERENCES `entradasdatashow`(`IdTipoEntrada`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaodatashow` ADD CONSTRAINT `FKConexaoDat869090` FOREIGN KEY (`IdEquipamento`) REFERENCES `datashow`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaogabinete` ADD CONSTRAINT `FKConexaoGab869405` FOREIGN KEY (`IdTipoEntrada`) REFERENCES `entradagabinete`(`IdTipoEntrada`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaogabinete` ADD CONSTRAINT `FKConexaoGab882675` FOREIGN KEY (`IdEquipamento`) REFERENCES `gabinete`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaoimpressora` ADD CONSTRAINT `FKConexaoImp598602` FOREIGN KEY (`IdTipoEntradaImpressora`) REFERENCES `entradaimpressora`(`IdTipoEntradaImpressora`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaoimpressora` ADD CONSTRAINT `FKConexaoImp854746` FOREIGN KEY (`IdEquipamento`) REFERENCES `impressora`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaomonitor` ADD CONSTRAINT `FKConexaoMon334103` FOREIGN KEY (`IdEquipamento`) REFERENCES `monitor`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaomonitor` ADD CONSTRAINT `FKConexaoMon906856` FOREIGN KEY (`IdTipoEntrada`) REFERENCES `entradamonitor`(`IdTipoEntrada`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaonotebook` ADD CONSTRAINT `FKConexaoNot273550` FOREIGN KEY (`IdTipoEntrada`) REFERENCES `entradanotebook`(`IdTipoEntrada`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaonotebook` ADD CONSTRAINT `FKConexaoNot713179` FOREIGN KEY (`IdEquipamento`) REFERENCES `notebook`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaoscanner` ADD CONSTRAINT `FKConexaoSca55130` FOREIGN KEY (`IdTipoEntradaScanner`) REFERENCES `entradascanner`(`IdTipoEntradaScanner`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `conexaoscanner` ADD CONSTRAINT `FKConexaoSca951413` FOREIGN KEY (`IdEquipamento`) REFERENCES `scanner`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `datashow` ADD CONSTRAINT `FKDatashow43947` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `datashow` ADD CONSTRAINT `FKDatashow515389` FOREIGN KEY (`IdResolucao`) REFERENCES `resolucaodatashow`(`IdResolucao`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `datashow` ADD CONSTRAINT `FKDatashow537981` FOREIGN KEY (`IdTipoLampada`) REFERENCES `tipolampada`(`IdTipoLampada`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `departamento` ADD CONSTRAINT `FKDepartamen164819` FOREIGN KEY (`IdSituacaoDepartamento`) REFERENCES `situacaodepartamento`(`IdSituacaoDepartamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `departamento` ADD CONSTRAINT `FKDepartamen456004` FOREIGN KEY (`IdTipoDepartamento`) REFERENCES `tipodepartamento`(`IdTipoDepartamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `departamento` ADD CONSTRAINT `FKDepartamen983123` FOREIGN KEY (`IdBlocoDepartamento`) REFERENCES `blocodepartamento`(`IdBlocoDepartamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `empresa` ADD CONSTRAINT `FKEmpresa270845` FOREIGN KEY (`IdCidade`) REFERENCES `cidade`(`IdCidade`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `equipamento` ADD CONSTRAINT `FKEquipament269` FOREIGN KEY (`IdCategoriaEquipamento`) REFERENCES `categoriaequipamento`(`IdCategoriaEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `equipamento` ADD CONSTRAINT `FKEquipament29013` FOREIGN KEY (`IdFabricante`) REFERENCES `fabricante`(`IdFabricante`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `equipamento` ADD CONSTRAINT `FKEquipament310433` FOREIGN KEY (`IdSituacaoEquipamento`) REFERENCES `situacaoequipamento`(`IdSituacaoEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `equipamento` ADD CONSTRAINT `FKEquipament462011` FOREIGN KEY (`IdEmpresa`) REFERENCES `empresa`(`IdEmpresa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `equipamento` ADD CONSTRAINT `FKEquipament67720` FOREIGN KEY (`IdDepartamento`) REFERENCES `departamento`(`IdDepartamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `equipamentoemprestimo` ADD CONSTRAINT `FKEquipament238464` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `equipamentoemprestimo` ADD CONSTRAINT `FKEquipament84856` FOREIGN KEY (`IdCondicaoEquipamento`) REFERENCES `condicaoemprestimoequipamento`(`IdCondicaoEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `fotoperfil` ADD CONSTRAINT `FKFotoPerfil867658` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `gabinete` ADD CONSTRAINT `FKGabinete331936` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `gabinete` ADD CONSTRAINT `FKGabinete60210` FOREIGN KEY (`IdSistemaOperacional`) REFERENCES `sistemaoperacional`(`IdSistemaOperacional`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `gabinetearmazenamento` ADD CONSTRAINT `FKGabineteAr416396` FOREIGN KEY (`IdDisco`) REFERENCES `armazenamento`(`IdDisco`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `gabinetearmazenamento` ADD CONSTRAINT `FKGabineteAr586393` FOREIGN KEY (`IdEquipamento`) REFERENCES `gabinete`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `gabinetememoria` ADD CONSTRAINT `FKGabineteMe417575` FOREIGN KEY (`IdEquipamento`) REFERENCES `gabinete`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `gabinetememoria` ADD CONSTRAINT `FKGabineteMe603412` FOREIGN KEY (`IdMemoria`) REFERENCES `memoria`(`IdMemoria`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `guia` ADD CONSTRAINT `FKGuia224984` FOREIGN KEY (`IdDepartamento`) REFERENCES `departamento`(`IdDepartamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `guia` ADD CONSTRAINT `FKGuia558379` FOREIGN KEY (`IdTipoEquipamento`) REFERENCES `tipoequipamento`(`IdTipoEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `guia` ADD CONSTRAINT `FKGuia56053` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `guia` ADD CONSTRAINT `FKGuia684766` FOREIGN KEY (`IdFormaContato`) REFERENCES `formacontato`(`IdFormaContato`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `guia` ADD CONSTRAINT `FKGuia747950` FOREIGN KEY (`IdSetorResponsavel`) REFERENCES `setorresponsavel`(`IdSetorResponsavel`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `guia` ADD CONSTRAINT `FKGuia999817` FOREIGN KEY (`IdSituacaoGuia`) REFERENCES `situacaoguia`(`IdSituacaoGuia`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `guiaequipamento` ADD CONSTRAINT `FKGuiaEquipa951499` FOREIGN KEY (`IdGuia`) REFERENCES `guia`(`IdGuia`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `historicoequipamento` ADD CONSTRAINT `FKHistoricoE340306` FOREIGN KEY (`IdDepartamento`) REFERENCES `departamento`(`IdDepartamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `historicoequipamento` ADD CONSTRAINT `FKHistoricoE509237` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `historicoequipamento` ADD CONSTRAINT `FKHistoricoE969299` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `impressora` ADD CONSTRAINT `FKImpressora168655` FOREIGN KEY (`IdTamanhoPapel`) REFERENCES `tamanhopapel`(`IdTamanhoPapel`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `impressora` ADD CONSTRAINT `FKImpressora571503` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `impressora` ADD CONSTRAINT `FKImpressora669800` FOREIGN KEY (`IdTipoImpressao`) REFERENCES `tipoimpressao`(`IdTipoImpressao`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `impressora` ADD CONSTRAINT `FKImpressora777991` FOREIGN KEY (`IdTecnologiaImpressao`) REFERENCES `tecnologiaimpressao`(`IdTecnologiaImpressao`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `impressora` ADD CONSTRAINT `FKImpressora900684` FOREIGN KEY (`IdTipoImpressora`) REFERENCES `tipoimpressora`(`IdTipoImpressora`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `marcalampada` ADD CONSTRAINT `FKMarcaLampa473381` FOREIGN KEY (`IdTipoLampada`) REFERENCES `tipolampada`(`IdTipoLampada`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `memorianotebook` ADD CONSTRAINT `FKMemoriaNot378409` FOREIGN KEY (`IdMemoria`) REFERENCES `memoria`(`IdMemoria`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `memorianotebook` ADD CONSTRAINT `FKMemoriaNot990499` FOREIGN KEY (`IdEquipamento`) REFERENCES `notebook`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `modelo` ADD CONSTRAINT `FKModelo98536` FOREIGN KEY (`IdFabricante`) REFERENCES `fabricante`(`IdFabricante`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `monitor` ADD CONSTRAINT `FKMonitor296305` FOREIGN KEY (`IdResolucao`) REFERENCES `resolucaomonitor`(`IdResolucao`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `monitor` ADD CONSTRAINT `FKMonitor307806` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `monitor` ADD CONSTRAINT `FKMonitor578333` FOREIGN KEY (`IdTipoDisplay`) REFERENCES `tipodisplay`(`IdTipoDisplay`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `monitor` ADD CONSTRAINT `FKMonitor816237` FOREIGN KEY (`IdTamanhoMonitor`) REFERENCES `tamanhomonitor`(`IdTamanhoMonitor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `monitor` ADD CONSTRAINT `FKMonitor908066` FOREIGN KEY (`IdFatorForma`) REFERENCES `fatorformamonitor`(`IdFatorForma`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `notafiscal` ADD CONSTRAINT `FKNotaFiscal77134` FOREIGN KEY (`IdEmpresa`) REFERENCES `empresa`(`IdEmpresa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `notafiscalequipamento` ADD CONSTRAINT `FKNotaFiscal337780` FOREIGN KEY (`IdNotaFiscal`) REFERENCES `notafiscal`(`IdNotaFiscal`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `notafiscalequipamento` ADD CONSTRAINT `FKNotaFiscal370179` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `notebook` ADD CONSTRAINT `FKNotebook113453` FOREIGN KEY (`IdSistemaOperacional`) REFERENCES `sistemaoperacional`(`IdSistemaOperacional`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `notebook` ADD CONSTRAINT `FKNotebook465991` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `notebook` ADD CONSTRAINT `FKNotebook872399` FOREIGN KEY (`IdProcessador`) REFERENCES `processador`(`IdProcessador`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `numeroip` ADD CONSTRAINT `FKNumeroIp648551` FOREIGN KEY (`IdDepartamento`) REFERENCES `departamento`(`IdDepartamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `numeroip` ADD CONSTRAINT `FKNumeroIp873993` FOREIGN KEY (`Equipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ocorrencia` ADD CONSTRAINT `FKOcorrencia253641` FOREIGN KEY (`IdGuia`) REFERENCES `guia`(`IdGuia`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ocorrencia` ADD CONSTRAINT `FKOcorrencia268737` FOREIGN KEY (`IdSala`) REFERENCES `sala`(`IdSala`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `ocorrencia` ADD CONSTRAINT `FKOcorrencia602115` FOREIGN KEY (`IdProfessor`) REFERENCES `professor`(`IdProfessor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pedidoemprestimoequipamento` ADD CONSTRAINT `FKPedidoEmpr906314` FOREIGN KEY (`IdSituacaoEmprestimoEquipamento`) REFERENCES `situacaoemprestimoequipamento`(`IdSituacaoEmprestimoEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pedidoemprestimoequipamento` ADD CONSTRAINT `FKPedidoEmpr921077` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pedidoequipamento` ADD CONSTRAINT `FKPedidoEqui382095` FOREIGN KEY (`IdEquipamentoEmprestimo`) REFERENCES `equipamentoemprestimo`(`IdEquipamentoEmprestimo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pedidoequipamento` ADD CONSTRAINT `FKPedidoEqui612319` FOREIGN KEY (`IdPedidoEmprestimo`) REFERENCES `pedidoemprestimoequipamento`(`IdPedidoEmprestimo`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pessoa` ADD CONSTRAINT `FKPessoa159743` FOREIGN KEY (`IdSituacaoPessoa`) REFERENCES `situacaopessoa`(`IdSituacaoPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `pessoa` ADD CONSTRAINT `FKPessoa688008` FOREIGN KEY (`IdTipoPessoa`) REFERENCES `tipopessoa`(`IdTipoPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `placamae` ADD CONSTRAINT `FKPlacaMae368543` FOREIGN KEY (`IdSocket`) REFERENCES `socketprocessador`(`IdSocket`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `placamae` ADD CONSTRAINT `FKPlacaMae427829` FOREIGN KEY (`IdFabricantePlacaMae`) REFERENCES `fabricanteplacamae`(`IdFabricantePlacaMae`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `processador` ADD CONSTRAINT `FKProcessado685393` FOREIGN KEY (`IdSocket`) REFERENCES `socketprocessador`(`IdSocket`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `processador` ADD CONSTRAINT `FKProcessado686817` FOREIGN KEY (`IdFabricanteProcessador`) REFERENCES `fabricanteprocessador`(`IdFabricanteProcessador`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `professor` ADD CONSTRAINT `FKProfessor133994` FOREIGN KEY (`IdSituacaoTreinamentoMultimidia`) REFERENCES `situacaotreinamentomultimidia`(`IdSituacaoTreinamentoMultimidia`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `professor` ADD CONSTRAINT `FKProfessor49846` FOREIGN KEY (`IdSituacaoTreinamentoSalaInformatica`) REFERENCES `situacaotreinamentosalainformatica`(`IdSituacaoTreinamentoSalaInformatica`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `professor` ADD CONSTRAINT `FKProfessor59` FOREIGN KEY (`IdSituacaoProfessor`) REFERENCES `situacaoprofessor`(`IdSituacaoProfessor`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `responsavelguia` ADD CONSTRAINT `FKResponsave21417` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `responsavelguia` ADD CONSTRAINT `FKResponsave517807` FOREIGN KEY (`IdGuia`) REFERENCES `guia`(`IdGuia`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `sala` ADD CONSTRAINT `FKSala213085` FOREIGN KEY (`IdTipoSala`) REFERENCES `tiposala`(`IdTipoSala`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `sala` ADD CONSTRAINT `FKSala39636` FOREIGN KEY (`IdBlocoSala`) REFERENCES `blocosala`(`IdBlocoSala`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `sala` ADD CONSTRAINT `FKSala646356` FOREIGN KEY (`IdSituacaoSala`) REFERENCES `situacaosala`(`IdSituacaoSala`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `scanner` ADD CONSTRAINT `FKScanner353413` FOREIGN KEY (`IdTamanhoPapel`) REFERENCES `tamanhopapel`(`IdTamanhoPapel`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `scanner` ADD CONSTRAINT `FKScanner657642` FOREIGN KEY (`IdTipoScanner`) REFERENCES `tiposcanner`(`IdTipoScanner`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `scanner` ADD CONSTRAINT `FKScanner950564` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `serieequipamento` ADD CONSTRAINT `FKSerieEquip744704` FOREIGN KEY (`IdEquipamento`) REFERENCES `equipamento`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `situacaoincidente_pessoa` ADD CONSTRAINT `FKSituacaoIn797509` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa`(`IdPessoa`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `situacaoincidente_pessoa` ADD CONSTRAINT `FKSituacaoIn939305` FOREIGN KEY (`IdSituacaoIncidente`) REFERENCES `situacaoincidente`(`IdSituacaoIncidente`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `slotsplacamae` ADD CONSTRAINT `FKSlotsPlaca696022` FOREIGN KEY (`IdPlacaMae`) REFERENCES `placamae`(`IdPlacaMae`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `slotsplacamae` ADD CONSTRAINT `FKSlotsPlaca886353` FOREIGN KEY (`IdSlotPlacaMae`) REFERENCES `slotplacamae`(`IdSlotPlacaMae`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `trocalampada` ADD CONSTRAINT `FKTrocaLampa622616` FOREIGN KEY (`IdEquipamento`) REFERENCES `datashow`(`IdEquipamento`) ON DELETE RESTRICT ON UPDATE RESTRICT;


const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Usuario = db.define('tblUsuarios', {
    // id: {
    //     type: DataTypes.INTEGER
    // },
    clave: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    nombreCorto: {
        type: DataTypes.STRING
    },
    // sueldo: {
    //     type: DataTypes.NUMBER
    // },
    sucursalesPuedeCancelar: {
        type: DataTypes.INTEGER
    },
    // comprobantesPuedeCancelar: {
    //     type: DataTypes.INTEGER
    // },
    contaMesesPermisos: {
        type: DataTypes.INTEGER
    },
    noModificarPolizaEjercicio: {
        type: DataTypes.INTEGER
    },
    esTrabajadorEcommerce: {
        type: DataTypes.INTEGER
    },
    // noPuedeEditarEncabezadoPoliza: {
    //     type: DataTypes.INTEGER
    // },
    contaUsarEmpresaSucursalSesion: {
        type: DataTypes.INTEGER
    },
    esAccesoCorporativo: {
        type: DataTypes.INTEGER
    },
    // mostrarOpcionPreAplicacionPagos: {
    //     type: DataTypes.INTEGER
    // },
    cuentasContables: {
        type: DataTypes.STRING
    },
    centrosCostos: {
        type: DataTypes.STRING
    },
    seriesConciliacion: {
        type: DataTypes.STRING
    },
    reportesEspecialesContabilidad: {
        type: DataTypes.STRING
    },
    codigoContable: {
        type: DataTypes.STRING
    },
    puedeVerCarteraSucursales: {
        type: DataTypes.INTEGER
    },
    mostrarMejorasSistema: {
        type: DataTypes.INTEGER
    },
    desbloqueaCorteEfectivo: {
        type: DataTypes.INTEGER
    },
    numeroProspectosMensuales: {
        type: DataTypes.INTEGER
    },
    noExpiraSesion: {
        type: DataTypes.INTEGER
    },
    noTomarFechaCierreContable: {
        type: DataTypes.INTEGER
    },
    mostrarAyudaDescargaMasiva: {
        type: DataTypes.INTEGER
    },
    esCobrador: {
        type: DataTypes.INTEGER
    },
    cancelaEnSistema: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaResguardo: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaResguardo2: {
        type: DataTypes.INTEGER
    },
    mostrarConsejoDiario: {
        type: DataTypes.INTEGER
    },
    puedeVerPendientesSurtirSucursales: {
        type: DataTypes.INTEGER
    },
    vioVideoCRM: {
        type: DataTypes.INTEGER
    },
    numeroProspectosClientes: {
        type: DataTypes.INTEGER
    },
    idAreaEmpresa: {
        type: DataTypes.INTEGER
    },
    puedeActualizarComprobantes: {
        type: DataTypes.INTEGER
    },
    idEmpresa: {
        type: DataTypes.INTEGER
    },
    idSucursal: {
        type: DataTypes.INTEGER
    },
    idSucursalPertenece: {
        type: DataTypes.INTEGER
    },
    idEmpresaPertenece: {
        type: DataTypes.INTEGER
    },
    idPermisoPoliza: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaEliminarUno: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaEliminarDos: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaEliminarTres: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaCancelarUno: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaCancelarDos: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaCancelarTres: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaComprasUno: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaComprasDos: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaComprasTres: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaCreditoUno: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaCreditoDos: {
        type: DataTypes.INTEGER
    },
    idUsuarioAutorizaCreditoTres: {
        type: DataTypes.INTEGER
    },
    rfc: {
        type: DataTypes.STRING
    },
    curp: {
        type: DataTypes.STRING
    },
    idChofer: {
        type: DataTypes.INTEGER
    },
    idDireccion: {
        type: DataTypes.INTEGER
    },
    esVendedor: {
        type: DataTypes.INTEGER
    },
    esOperador: {
        type: DataTypes.INTEGER
    },
    esTrabajador: {
        type: DataTypes.INTEGER
    },
    esChofer: {
        type: DataTypes.INTEGER
    },
    costoHora: {
        type: DataTypes.NUMBER
    },
    esComprador: {
        type: DataTypes.INTEGER
    },
    claveAcceso: {
        type: DataTypes.STRING
    },
    idUsuarioCabecera: {
        type: DataTypes.INTEGER
    },
    codigoNomina: {
        type: DataTypes.INTEGER
    },
    alta: {
        type: DataTypes.DATE
    },
    baja: {
        type: DataTypes.DATE
    },
    cambio: {
        type: DataTypes.DATE
    },
    comentarios: {
        type: DataTypes.STRING
    },
    idUsuario: {
        type: DataTypes.INTEGER
    },
    contrasena: {
        type: DataTypes.STRING
    },
    contrasenaAut: {
        type: DataTypes.STRING
    },
    fechaContrasena: {
        type: DataTypes.DATE
    },
    idPerfil: {
        type: DataTypes.INTEGER
    },
    idTiposPersonasSAT: {
        type: DataTypes.INTEGER
    },
    idTipoUsuario: {
        type: DataTypes.INTEGER
    },
    presupuestoVta: {
        type: DataTypes.NUMBER
    },
    presupuestoTrab: {
        type: DataTypes.NUMBER
    },
    idRuta: {
        type: DataTypes.INTEGER
    },
    rfcValido: {
        type: DataTypes.INTEGER
    },
    idDisponible1: {
        type: DataTypes.INTEGER
    },
    idDisponible2: {
        type: DataTypes.INTEGER
    },
    idDisponible3: {
        type: DataTypes.INTEGER
    },
    idDisponible4: {
        type: DataTypes.INTEGER
    },
    idDisponible5: {
        type: DataTypes.INTEGER
    },
    idDisponible6: {
        type: DataTypes.INTEGER
    },
    idDisponible7: {
        type: DataTypes.INTEGER
    },
    idDisponible8: {
        type: DataTypes.INTEGER
    },
    idDisponible9: {
        type: DataTypes.INTEGER
    },
    rutaImagen1: {
        type: DataTypes.STRING
    },
    idSupervisorVenta: {
        type: DataTypes.INTEGER
    },
    idProveedor: {
        type: DataTypes.INTEGER
    },
    porcentajeComisionSupervisor: {
        type: DataTypes.NUMBER
    },
    servidorSMTP: {
        type: DataTypes.STRING
    },
    puertoSMTP: {
        type: DataTypes.STRING
    },
    usaProxy: {
        type: DataTypes.INTEGER
    },
    usuarioCorreo: {
        type: DataTypes.STRING
    },
    usuarioContraseña: {
        type: DataTypes.STRING
    },
    correoDestinatario: {
        type: DataTypes.STRING
    },
    destinatario: {
        type: DataTypes.STRING
    },
    puedeAutorizarCostos: {
        type: DataTypes.INTEGER
    },
    puedeAutorizarPrecios: {
        type: DataTypes.INTEGER
    },
    activarCorreo: {
        type: DataTypes.INTEGER
    },
    // descuento: {
    //     type: DataTypes.NUMBER
    // },
    // descuentoCliente: {
    //     type: DataTypes.NUMBER
    // },
    // idClienteDescuento: {
    //     type: DataTypes.INTEGER
    // },
})

module.exports = Usuario;
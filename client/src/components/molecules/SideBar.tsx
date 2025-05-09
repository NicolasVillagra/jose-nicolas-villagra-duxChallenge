const AppSidebar = () => {
  return (
    <div className="block left-0 top-0 pt-6 bg-gray-900 text-white shadow-2 z-1">
      <div className="flex flex-column h-full">
        <div className="flex justify-content-center p-3 mb-4">
          <h2 className="text-xl font-semibold">Menú</h2>
        </div>

        {/* Items del menú con iconos */}
        <div className="flex flex-column">
          <a className="flex align-items-center p-3 hover:bg-blue-600 cursor-pointer">
            <i className="pi pi-home mr-2"></i>
            <span>Inicio</span>
          </a>
          <a className="flex align-items-center p-3 hover:bg-blue-600 cursor-pointer">
            <i className="pi pi-user mr-2"></i>
            <span>Perfil</span>
          </a>
          <a className="flex align-items-center p-3 hover:bg-blue-600 cursor-pointer">
            <i className="pi pi-cog mr-2"></i>
            <span>Configuración</span>
          </a>
          <a className="flex align-items-center p-3 hover:bg-blue-600 cursor-pointer">
            <i className="pi pi-envelope mr-2"></i>
            <span>Mensajes</span>
          </a>
          <a className="flex align-items-center p-3 hover:bg-blue-600 cursor-pointer">
            <i className="pi pi-calendar mr-2"></i>
            <span>Calendario</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;

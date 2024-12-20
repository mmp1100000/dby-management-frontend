export default {
  translation: {
    common: {
      appTitle: 'Gestor de Horas de Proyecto',
      date: 'Fecha',
      hours: 'Horas',
      amount: 'Importe',
      category: 'Categoría',
      priority: 'Prioridad',
      status: 'Estado',
      description: 'Descripción',
      cancel: 'Cancelar',
      save: 'Guardar',
      delete: 'Eliminar',
      activeProjects: 'Proyectos Activos',
      backToProjects: 'Volver a Proyectos',
      noProjects: 'No se encontraron proyectos',
      hoursRemaining: 'Horas Restantes',
      hoursUsed: 'Horas Utilizadas',
      totalHours: 'Horas Totales',
      client: 'Cliente',
      projectStatus: 'Estado del Proyecto',
      actions: 'Acciones',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      details: 'Detalles',
      comments: 'Comentarios',
      addComment: 'Agregar Comentario',
      recurring: 'Recurrente',
      total: 'Total',
      daily: 'Diario',
      monthly: 'Mensual',
      yearly: 'Anual',
      timeScale: 'Escala de Tiempo',
      tasks: 'Tareas',
      tasksCompleted: 'Tareas Completadas',
      projectProgress: 'Progreso del Proyecto',
      hoursAllocation: 'Asignación de Horas',
      hoursLimitExceeded: 'Límite de Horas Excedido',
      hoursOverAllocationWarning: 'Advertencia de Sobre-asignación de Horas',
      availableForTasks: 'Disponible para tareas adicionales',
      totalEstimatedHours: 'Total de horas estimadas',
      allocated: 'asignadas',
      planned: 'planificadas',
      assignee: 'Asignado a',
      unassigned: 'Sin asignar',
      timeTracking: 'Seguimiento de Tiempo',
      summary: 'Resumen',
      key: 'Clave',
      budget: 'Presupuesto',
      cumulativeHours: 'Horas Acumuladas',
      projectType: {
        timeBased: 'Bolsa de horas',
        fixedPrice: 'Presupuesto cerrado'
      },
      alerts: {
        hoursExceededBy: 'Horas excedidas en',
        estimatedOver: 'Estimado {{hours}}h por encima del presupuesto',
        immediateAction: 'Acción inmediata requerida: Solicitar horas adicionales o pausar el trabajo en el proyecto.',
        considerAction: 'Considere solicitar horas adicionales o revisar las estimaciones de las tareas.',
        hoursExceededTitle: 'Límite de Horas Excedido',
        hoursExceededDescription: 'El proyecto ha excedido sus horas asignadas en {{hours}} horas. ({{spent}}h utilizadas de {{total}}h asignadas)',
        overAllocationTitle: 'Advertencia de Sobre-asignación de Horas',
        overAllocationDescription: 'El total de horas estimadas para todas las tareas ({{estimated}}h) excede las horas asignadas al proyecto ({{total}}h) en {{difference}} horas.',
        hoursAllocationTitle: 'Asignación de Horas',
        hoursAllocationDescription: 'Total de horas estimadas: {{estimated}}h de {{total}}h asignadas ({{percentage}}% planificado)',
        availableHours: 'Disponible para tareas adicionales: {{hours}}h'
      },
      hourRequests: {
        title: 'Gestión de Solicitudes de Horas',
        search: 'Buscar por nombre de proyecto',
        status: {
          all: 'Todos los Estados',
          pending: 'Pendiente',
          approved: 'Aprobado',
          rejected: 'Rechazado'
        },
        fields: {
          project: 'Proyecto',
          requestedBy: 'Solicitado Por',
          hours: 'Horas',
          status: 'Estado',
          neededBy: 'Necesario Para',
          requested: 'Solicitado',
          reason: 'Motivo',
          reviewDetails: 'Detalles de Revisión',
          reviewedBy: 'Revisado por',
          reviewedOn: 'Revisado el',
          notes: 'Notas',
          unknownUser: 'Usuario Desconocido',
          totalItems: 'Total {{total}} elementos',
          client: 'Cliente',
          requestDate: 'Fecha de Solicitud',
          reviewer: 'Revisor',
          reviewDate: 'Fecha de Revisión',
          decision: 'Decisión'
        },
        actions: {
          review: 'Revisar',
          delete: 'Eliminar',
          expand: 'Mostrar Detalles',
          collapse: 'Ocultar Detalles',
          approve: 'Aprobar',
          reject: 'Rechazar',
          submit: 'Enviar',
          cancel: 'Cancelar'
        },
        alerts: {
          pendingReview: 'Solicitud de Horas Pendiente de Revisión',
          approved: 'Solicitud de Horas Aprobada',
          rejected: 'Solicitud de Horas Rechazada',
          requestSubmitted: 'Una solicitud de {{hours}}h está pendiente de revisión.',
          requestApproved: 'Solicitud de {{hours}}h fue aprobada.',
          requestRejected: 'Solicitud de {{hours}}h fue rechazada.',
          submittedOn: 'Enviada el {{date}}',
          reviewedOn: 'Revisada el {{date}}',
          noRequests: 'No se encontraron solicitudes de horas',
          pendingAction: 'Esta solicitud requiere su revisión',
          approvalNeeded: 'Se necesita aprobación para solicitud de {{hours}}h',
          rejectionReason: 'Solicitud rechazada: {{reason}}'
        },
        review: {
          title: 'Revisar Solicitud de Horas',
          requestDetails: 'Detalles de la Solicitud',
          hoursRequested: 'Horas Solicitadas',
          decision: 'Decisión',
          approve: 'Aprobar',
          reject: 'Rechazar',
          reviewNotes: 'Notas de Revisión',
          notesPlaceholder: 'Proporcione notas adicionales o razones para su decisión...',
          submit: 'Enviar Revisión',
          cancel: 'Cancelar',
          confirmSubmit: '¿Está seguro de que desea enviar esta revisión?',
          approveConfirm: '¿Está seguro de que desea aprobar esta solicitud?',
          rejectConfirm: '¿Está seguro de que desea rechazar esta solicitud?',
          notesRequired: 'Por favor, proporcione notas de revisión'
        },
        delete: {
          title: 'Eliminar Solicitud de Horas',
          confirm: '¿Está seguro de que desea eliminar esta solicitud de horas?',
          success: 'Solicitud eliminada exitosamente',
          error: 'Error al eliminar la solicitud',
          confirmButton: 'Sí, eliminar',
          cancelButton: 'No, mantener'
        },
        messages: {
          fetchError: 'Error al obtener las solicitudes de horas',
          reviewSuccess: 'Solicitud revisada exitosamente',
          reviewError: 'Error al revisar la solicitud',
          deleteSuccess: 'Solicitud eliminada exitosamente',
          deleteError: 'Error al eliminar la solicitud',
          createSuccess: 'Solicitud de horas creada exitosamente',
          createError: 'Error al crear la solicitud de horas',
          updateSuccess: 'Solicitud actualizada exitosamente',
          updateError: 'Error al actualizar la solicitud'
        },
        filters: {
          allProjects: 'Todos los Proyectos',
          allStatus: 'Todos los Estados',
          dateRange: 'Rango de Fechas',
          searchPlaceholder: 'Buscar proyectos o solicitantes...'
        }
      }
    },
    auth: {
      login: 'Iniciar Sesión',
      logout: 'Cerrar Sesión',
      email: 'Correo Electrónico',
      password: 'Contraseña',
      emailPlaceholder: 'Ingrese su correo electrónico',
      passwordPlaceholder: 'Ingrese su contraseña',
      welcomeBack: 'Bienvenido de Nuevo',
      loginToContinue: 'Por favor, inicie sesión para continuar',
      accountSettings: 'Configuración de la Cuenta',
      invalidCredentials: 'Correo o contraseña inválidos',
      demoCredentials: 'Credenciales de Demostración:',
      userProfile: 'Perfil de Usuario',
      userSettings: 'Configuración de Usuario'
    },
    menu: {
      messages: 'Mensajes',
      notifications: 'Notificaciones',
      emailUpdates: 'Actualizaciones por Correo',
      language: 'Idioma',
      english: 'Inglés',
      spanish: 'Español',
      theme: 'Tema',
      settings: 'Configuración',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro'
    },
    project: {
      requestMoreHours: 'Solicitar Más Horas',
      currentHoursInfo: 'Total actual: {{current}} horas ({{remaining}} restantes)',
      additionalHours: 'Horas Adicionales Necesarias',
      enterAdditionalHours: 'Ingrese el número de horas adicionales',
      requestReason: 'Motivo de la Solicitud',
      enterRequestReason: 'Por favor, explique por qué se necesitan horas adicionales...',
      neededBy: 'Se Necesita Para',
      submitRequest: 'Enviar Solicitud',
      hoursRequestSubmitted: 'Solicitud de horas enviada exitosamente',
      addTask: 'Agregar Tarea',
      addExpense: 'Agregar Gasto',
      hoursOverview: 'Resumen de Horas',
      timeTracking: 'Seguimiento de Tiempo',
      expenses: 'Gastos',
      comments: 'Comentarios',
      details: 'Detalles',
      viewDetails: 'Ver Detalles',
      editDetails: 'Editar Detalles',
      linkJiraEpic: 'Vincular Epic de Jira',
      jiraEpicKey: 'Clave de Epic de Jira',
      jiraProjectKey: 'Clave de Proyecto de Jira'
    },
    task: {
      taskDetails: 'Detalles de la Tarea',
      taskDescription: 'Descripción de la Tarea',
      requestNewTask: 'Solicitar Nueva Tarea',
      submitRequest: 'Enviar Solicitud',
      timeSpent: 'Tiempo Dedicado',
      originalEstimate: 'Estimación Original',
      remainingEstimate: 'Estimación Restante',
      priority: {
        low: 'Baja',
        medium: 'Media',
        high: 'Alta',
        urgent: 'Urgente'
      },
      status: {
        'pending-estimation': 'Pendiente de Estimación',
        'client-approved': 'Aprobado por Cliente',
        'in-progress': 'En Progreso',
        'blocked': 'Bloqueado',
        'done': 'Completado'
      }
    },
    expense: {
      expenseDetails: 'Detalles del Gasto',
      recurringExpense: 'Gasto Recurrente',
      recurringInterval: 'Intervalo de Recurrencia',
      intervals: {
        monthly: 'Mensual',
        quarterly: 'Trimestral',
        yearly: 'Anual'
      },
      categories: {
        hosting: 'Alojamiento',
        licenses: 'Licencias de Software',
        services: 'Servicios de Terceros',
        infrastructure: 'Infraestructura',
        other: 'Otros'
      }
    },
    validation: {
      required: 'Este campo es requerido',
      hoursRequired: 'Por favor ingrese el número de horas necesarias',
      hoursMin: 'Las horas deben ser mayores a 0',
      reasonRequired: 'Por favor proporcione un motivo para la solicitud',
      dateRequired: 'Por favor seleccione una fecha',
      descriptionRequired: 'Por favor ingrese una descripción',
      amountRequired: 'Por favor ingrese un importe',
      categoryRequired: 'Por favor seleccione una categoría',
      intervalRequired: 'Por favor seleccione un intervalo',
      emailRequired: 'Por favor ingrese su correo electrónico',
      emailInvalid: 'Por favor ingrese un correo electrónico válido',
      passwordRequired: 'Por favor ingrese su contraseña',
      minPassword: 'La contraseña debe tener al menos 6 caracteres'
    },
    admin: {
      title: 'Panel de Administración',
      menu: {
        hourRequests: 'Solicitudes de Horas',
        projects: 'Proyectos',
        expenses: 'Gastos',
        users: 'Usuarios',
        dashboard: 'Panel'
      },
      projects: {
        title: 'Gestión de Proyectos',
        create: 'Crear Proyecto',
        edit: 'Editar Proyecto',
        status: 'Estado',
        client: 'Cliente',
        budget: 'Presupuesto',
        hours: 'Horas',
        actions: 'Acciones',
        name: 'Nombre del Proyecto',
        startDate: 'Fecha de Inicio',
        endDate: 'Fecha de Fin',
        type: 'Tipo de Proyecto',
        team: 'Equipo'
      },
      expenses: {
        title: 'Gestión de Gastos',
        create: 'Registrar Gasto',
        edit: 'Editar Gasto',
        amount: 'Importe',
        category: 'Categoría',
        date: 'Fecha',
        recurring: 'Recurrente',
        description: 'Descripción'
      },
      users: {
        title: 'Gestión de Usuarios',
        create: 'Crear Usuario',
        edit: 'Editar Usuario',
        role: 'Rol',
        status: 'Estado',
        lastLogin: 'Último Acceso',
        email: 'Correo',
        name: 'Nombre',
        password: 'Contraseña',
        confirmPassword: 'Confirmar Contraseña',
        roles: {
          admin: 'Administrador',
          manager: 'Gerente',
          user: 'Usuario'
        },
        statuses: {
          active: 'Activo',
          inactive: 'Inactivo'
        }
      },
      common: {
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        view: 'Ver',
        search: 'Buscar',
        filter: 'Filtrar',
        noData: 'No hay datos disponibles',
        confirmDelete: '¿Está seguro de que desea eliminar este elemento?',
        team: 'Equipo',
        addUser: 'Agregar Usuario',
        removeUser: 'Eliminar Usuario',
        selectUser: 'Seleccionar usuario',
        selectRole: 'Seleccionar rol'
      }
    }
  }
}

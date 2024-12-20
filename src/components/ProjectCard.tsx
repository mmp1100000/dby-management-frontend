import React from 'react';
import { Card, Progress, Typography, Tag, Space, Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types/project';
import { useJiraTasksQuery } from '../hooks/useJiraTasksQuery';
import { Clock, Euro, Hourglass, Lock, ExternalLink, AlertTriangle } from 'lucide-react';

const { Title, Text } = Typography;

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const { data: jiraTasks = [] } = useJiraTasksQuery(project.id);

  const totalTimeSpent = jiraTasks.reduce((total, task) =>
      total + task.timeTracking.timeSpentSeconds / 3600, 0);

  const totalEstimatedHours = jiraTasks.reduce((total, task) =>
      total + task.timeTracking.originalEstimateSeconds / 3600, 0);

  const getProjectProgress = () => {
    const completedTasks = jiraTasks.filter(task => task.status === 'Finalizada').length;
    return jiraTasks.length > 0 ? Math.round((completedTasks / jiraTasks.length) * 100) : 0;
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'green';
      case 'completed':
        return 'blue';
      case 'on-hold':
        return 'orange';
    }
  };

  const getProjectTypeTag = () => {
    if (project.type === 'time-based') {
      return (
          <Tag className="flex items-center gap-1 !px-2 !py-1">
            <Hourglass size={14} className="flex-shrink-0" />
            <span>Bolsa de horas</span>
          </Tag>
      );
    }
    return (
        <Tag color="purple" className="flex items-center gap-1 !px-2 !py-1">
          <Lock size={14} className="flex-shrink-0" />
          <span>Presupuesto cerrado</span>
        </Tag>
    );
  };

  const isOverBudget = project.type === 'time-based' && totalTimeSpent > project.totalHours!;
  const isOverEstimated = project.type === 'time-based' && totalEstimatedHours > project.totalHours!;

  return (
      <Card
          hoverable
          onClick={() => navigate(`/projects/${project.id}`)}
          className="w-full transition-shadow duration-300 hover:shadow-lg"
      >
        <Space direction="vertical" className="w-full">
          <div className="flex justify-between items-start">
            <Title level={4} className="!mb-0">
              {project.name}
            </Title>
            <Space size={4} className="flex-shrink-0">
              {getProjectTypeTag()}
              <Tag color={getStatusColor(project.status)} className="uppercase !px-2 !py-1">
                {project.status}
              </Tag>
              {project.jiraEpicKey && (
                  <Tag className="flex items-center gap-1 !px-2 !py-1" color="blue">
                    <ExternalLink size={14} className="flex-shrink-0" />
                    {project.jiraEpicKey}
                  </Tag>
              )}
            </Space>
          </div>

          <Text type="secondary">{project.client}</Text>

          {isOverBudget && (
              <Alert
                  type="error"
                  message={`Hours exceeded by ${(totalTimeSpent - project.totalHours!).toFixed(1)}h`}
                  icon={<AlertTriangle size={16} />}
                  className="!mb-2"
                  banner
              />
          )}

          {!isOverBudget && isOverEstimated && (
              <Alert
                  type="warning"
                  message={`Estimated ${(totalEstimatedHours - project.totalHours!).toFixed(1)}h over budget`}
                  icon={<AlertTriangle size={16} />}
                  className="!mb-2"
                  banner
              />
          )}

          <div className="mt-4">
            <Progress
                percent={getProjectProgress()}
                status={getProjectProgress() >= 90 ? 'success' : 'active'}
                className="mb-2"
            />

            <div className="flex justify-between items-center">
              {project.type === 'time-based' ? (
                  <Space>
                    <Clock size={16} className="text-gray-500" />
                    <Text>
                      {totalTimeSpent.toFixed(1)}h / {project.totalHours}h
                      {totalEstimatedHours > 0 && ` (${totalEstimatedHours.toFixed(1)}h estimated)`}
                    </Text>
                  </Space>
              ) : (
                  <Space>
                    <Euro size={16} className="text-gray-500" />
                    <Text>€{project.budget?.toLocaleString()}</Text>
                  </Space>
              )}

              <Space>
                <Text className="text-gray-500">Tasks:</Text>
                <Text>
                  {jiraTasks.filter(task => task.status === 'Finalizada').length} / {jiraTasks.length}
                </Text>
              </Space>
            </div>
          </div>
        </Space>
      </Card>
  );
};
